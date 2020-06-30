module.exports = function (schema, schemaBaseReferences, schemaAdditionalReferences) {
    schema.static('getServiceDownGrid', function (req, res) {
      
      const {
        languageCode,
        countryCode,
        nameHyphen,
        cityName
      } = schemaBaseReferences
      
      const {
        serviceLogoImage,
        serviceLogoImageAlt,
        nameCase,
        serviceNameHyphen
      } = schemaAdditionalReferences
  
      const {
        reqLanguageCode,
        reqCountryCode,
      } = res.locals
  
      const query = {
        // [languageCode]:reqLanguageCode,
        // [countryCode]:reqCountryCode,
        [nameHyphen]: {$ne: null},
        [cityName]: null,
      }
  
      const projection = {
        _id: 0,
        link: undefined,
        header: `$${nameCase}`,
        img: `$${serviceLogoImage}`,
        alt: `$${serviceLogoImageAlt}`
      }
  
      projection.link = { $concat: ['/', `$${languageCode}`, '-', `$${countryCode}`, '/', `$${serviceNameHyphen}`] }
  
      return this.aggregate([
        { $match: query },
        { $project: projection }
      ])
    })
  }
  