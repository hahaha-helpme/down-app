module.exports = function (schema, schemaBaseReferences, schemaAdditionalReferences) {
    schema.static('getCityPagesList', function (req, res) {
      
      const {
        languageCode,
        countryCode,
        nameHyphen,
        cityName
      } = schemaBaseReferences
      
      const {
        serviceNameHyphen,
        serviceCityAsciiNameHyphen,
        serviceCityAsciiName
      } = schemaAdditionalReferences
  
      const {
        reqLanguageCode,
        reqCountryCode,
        reqServiceName,
        reqCityName,
      } = res.locals
      
      const {
        hostname,
        protocol
      } = req
  
      const query = {
        [languageCode]:reqLanguageCode,
        [countryCode]:reqCountryCode,
        [nameHyphen]: reqServiceName,
        $and: [
            {[cityName]: {$ne: null}},
            {[cityName]: {$ne: reqCityName}},
        ],
      }
  
      const projection = {
        _id: 0,
        link: undefined,
        anchor: `$${serviceCityAsciiName}`,
      }
  
      projection.link = { $concat: [protocol, '://', hostname, '/', `$${languageCode}`, '-', `$${countryCode}`, '/', `$${serviceNameHyphen}`, '/', `$${serviceCityAsciiNameHyphen}`] }
  
      return this.aggregate([
        { $match: query },
        { $project: projection }
      ])
    })
  }
  