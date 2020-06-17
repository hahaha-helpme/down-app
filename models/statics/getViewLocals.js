module.exports = function (schema, schemaBaseReferences) {
  schema.static('getViewLocals', function (res) {
    
    const {
      languageCode,
      countryCode,
      nameHyphen,
      cityName
    } = schemaBaseReferences
    
    const {
      reqLanguageCode,
      reqCountryCode,
      reqServiceName,
      reqCityName
    } = res.locals

    const query = {
      [languageCode]: reqLanguageCode,
      [countryCode]: reqCountryCode,
      [nameHyphen]: reqServiceName,
      [cityName]: reqCityName,
    }

    return this.findOne(query)
  })
}
