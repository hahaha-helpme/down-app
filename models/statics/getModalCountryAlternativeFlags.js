module.exports = function (schema, schemaBaseReferences, schemaAdditionalReferences) {
  schema.static('getModalCountryAlternativeFlags', function (req, res) {
    
    const {
      languageCode,
      countryCode,
      nameHyphen,
      cityName
    } = schemaBaseReferences
    
    const {
      countryFlagImg,
      countryFlagAlt,
      languageEndonym,
      seoCumulativeSearchVolume,
      nameCase
    } = schemaAdditionalReferences

    const {
      reqLanguageCode,
      reqCountryCode,
      reqServiceName
    } = res.locals
    
    const {
      hostname,
      protocol
    } = req

    if(!reqServiceName) return null

    const query = {
      [nameHyphen]: null,
      [cityName]: null,
      $and: [
        {[languageCode]: {$ne: reqLanguageCode}}, 
        {[countryCode]: {$ne: reqCountryCode}
      }]
    }

    const projection = {
      _id: 0,
      link: undefined,
      anchor: `$${languageEndonym}`,
      img: `$${countryFlagImg}`,
      alt: `$${countryFlagAlt}`
    }

    projection.link = { $concat: [protocol, '://', hostname, '/', `$${languageCode}`, '-', `$${countryCode}`] }

    return this.aggregate([
      { $match: query },
      { $project: projection }
    ])
  })
}
