module.exports = function(schema, schemaBaseReferences, schemaAdditionalReferences) {
  schema.static('getModalPositionPushingFlags', function(req, res) {

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
      reqServiceName,
    } = res.locals

    if(!reqServiceName) return null

    const query = {
      [cityName]: null,
      [nameHyphen]: {$ne: null},
      $and: [
        {$or : [ 
            {[languageCode]: {$ne: reqLanguageCode}}, 
            {[countryCode]: {$ne: reqCountryCode}}, 
            {[nameHyphen]: {$ne: reqServiceName}},
         ]},
        {$or : [ 
            {[languageCode]: {$eq: reqLanguageCode}}, 
            {[countryCode]: {$eq: reqCountryCode}},
          ]}        
      ],
    }

    const projection = {
      _id: 0,
      link: undefined,
      anchor: {$concat: [`$${nameCase}`,` - `, `$${languageEndonym}`]},
      img: `$${countryFlagImg}`,
      alt: `$${countryFlagAlt}`
    }

    projection.link = {
      $concat: ['/', `$${languageCode}`, '-', `$${countryCode}`, '/', `$${nameHyphen}`]
    }

    const sort = {
      [seoCumulativeSearchVolume]: -1
    }

    return this.aggregate([
      {$match: query},
      {$sort: sort},
      {$project: projection},
      {$limit: 10}
    ])
  })
}