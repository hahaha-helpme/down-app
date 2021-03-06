module.exports = function (schema, schemaBaseReferences, schemaAdditionalReferences) {
  schema.static("getDatalayerServiceStatusAndReports", function (res) {
    const { reqLanguageCode, reqCountryCode, reqServiceName, reqCityName } = res.locals;

    const { languageCode, countryCode, serviceNameHyphen, cityAasciiNameHyphen } = schemaBaseReferences;

    const { type } = schemaAdditionalReferences;

    // deze waarde zouden eigenlijk in een soort config file moeten zitten

    const msPerMinute = 60000;
    const minutesInHour = 60;
    const hoursInDay = 24;
    const selectionNumDays = 10;
    const intervalInMinutes = 10;
    
    const getCurrentMinute = () =>{
      const currentDate = new Date();
      const elapsedMinutesCurrentHour = currentDate.getMinutes();
      const lastDigit = +elapsedMinutesCurrentHour.toString().split("").pop();
      return lastDigit * 60000
    }

    const getCurrentSecondes = () =>{
      return (Date.parse(new Date()) % (1000 * 60))
    }

    const query = {
      [type]: "report-without-description",
      [languageCode]: reqLanguageCode,
      [countryCode]: reqCountryCode,
      [serviceNameHyphen]: reqServiceName,
      [cityAasciiNameHyphen]: reqCityName,
      createdAt: {
        $gte: new Date(Date.now() - msPerMinute * minutesInHour * hoursInDay * selectionNumDays),
        $lt: new Date(),
      },
    };
    
    const group = {
      _id: {
        $toDate: {
          $subtract: [
            { $toLong: "$createdAt" }, 
            { $mod: [{ $toLong: { $subtract: ["$createdAt", getCurrentMinute() + getCurrentSecondes()] } }, 60000 * intervalInMinutes] }],
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
