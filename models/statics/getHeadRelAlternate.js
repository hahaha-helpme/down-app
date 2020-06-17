module.exports = function (schema, schemaBaseReferences) {
  schema.static('getHeadRelAlternate', function (req, res) {
    const { reqServiceName, reqCityName } = res.locals
    const { hostname, protocol } = req
        
    const {
      languageCode,
      countryCode,
      nameHyphen,
      cityName
    } = schemaBaseReferences
    
    const query = {
      [nameHyphen]: reqServiceName,
      [cityName]: reqCityName
    }

    const projection = {
      _id: 0,
      href: undefined,
      hrefLang: {
        $concat: [`$${languageCode}`, '-', `$${countryCode}`]
      }
    }

    if (reqCityName) {
      projection.href = { $concat: [protocol, '://', hostname, '/', `$${languageCode}`, '-', `$${countryCode}`, '/', `$${nameHyphen}`, '/', `$${cityName}`] }
    } else if (reqServiceName) {
      projection.href = { $concat: [protocol, '://', hostname, '/', `$${languageCode}`, '-', `$${countryCode}`, '/', `$${nameHyphen}`] }
    } else {
      projection.href = { $concat: [protocol, '://', hostname, '/', `$${languageCode}`, '-', `$${countryCode}`] }
    }

    return this.aggregate([
      { $match: query },
      { $project: projection }
    ])
  })
}
