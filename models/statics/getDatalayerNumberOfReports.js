module.exports = function (schema, schemaBaseReferences, schemaAdditionalReferences) {
  schema.static("getDatalayerNumberOfReports", function (res) {
    const { reqLanguageCode, reqCountryCode, reqServiceName, reqCityName } = res.locals;

    const { languageCode, countryCode, nameHyphen, cityName } = schemaBaseReferences;

    const { type } = schemaAdditionalReferences;

    // deze waarde zouden eigenlijk in een soort config file moeten zitten    
    const timeBlockLengthInMinutes = 10;
    const selectionHours = 12;

    const getCurrentMinute = () =>{
      const currentDate = new Date();
      const elapsedMinutesCurrentHour = currentDate.getMinutes();
      const lastDigit = +elapsedMinutesCurrentHour.toString().split("").pop();
      return lastDigit
    }

    const query = {
      [type]: "report-without-description",
      [languageCode]: reqLanguageCode,
      [countryCode]: reqCountryCode,
      [nameHyphen]: reqServiceName,
      [cityName]: reqCityName,
      createdAt: {
        $gte: new Date(Date.now() - 60000 * 60 * selectionHours),
        $lt: new Date(),
      },
    };

    const group = {
      _id: {
        $toDate: {
          $subtract: [
            { $toLong: "$createdAt" }, 
            { $mod: [{ $toLong: { $subtract: ["$createdAt", getCurrentMinute() * 60000] } }, 60000 * timeBlockLengthInMinutes] }],
        },
      },
      count: { $sum: 1 },
    };

    const projection = {
      _id: 0,
      time: "$_id",
      count: 1,
    };

    const queryResult = this.aggregate([
      { $match: query }, 
      { $group: group },
      { $sort: { '_id': -1 } },
      { $project: projection }
    ]);

    return queryResult;
  });
};
