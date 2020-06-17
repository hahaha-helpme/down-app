
const schemaBaseReferences = {
  languageCode: 'viewLocals.body.datalayer.language.code',
  countryCode: 'viewLocals.body.datalayer.country.code',
  nameHyphen: 'viewLocals.body.datalayer.service.nameHyphen',
  cityName: 'viewLocals.body.datalayer.city.asciiNameHyphen',
}

const schemaAdditionalReferences = {
  countryFlagImg: 'viewLocals.body.datalayer.country.flagImage',
  countryFlagAlt: 'viewLocals.body.datalayer.country.flagImageAlt',
  languageEndonym: 'viewLocals.body.datalayer.language.endonym',
  seoCumulativeSearchVolume: 'viewLocals.body.datalayer.seo.cumulativeSearchVolume',
  nameCase: 'viewLocals.body.datalayer.service.nameCase',
  serviceNameHyphen: 'viewLocals.body.datalayer.service.nameHyphen',
  serviceCityAsciiNameHyphen: 'viewLocals.body.datalayer.city.asciiNameHyphen',
  serviceCityAsciiName: 'viewLocals.body.datalayer.city.asciiName',
  serviceLogoImage: 'viewLocals.body.datalayer.service.logoImage',
  serviceLogoImageAlt: 'viewLocals.body.datalayer.service.logoImageAlt',
}

module.exports = function setSchemaFunctions (schema){

      schema.set('autoIndex', false)
      schema.set('autoCreate', false)
      schema.set('minimize', false)
      schema.set('timestamps', { currentTime: () => new Date().toISOString() })

      require('./statics/getViewLocals.js')(schema, schemaBaseReferences)

      // head
      require('./virtuals/getHeadLanguage.js')(schema)
      require('./statics/getHeadRelAlternate.js')(schema, schemaBaseReferences)
      require('./methods/getHeadCanonical.js')(schema)

      // nav
      require('./methods/getNavlogoLink.js')(schema)
      require('./methods/getNavHeaderLink.js')(schema)
      require('./virtuals/getNavLogoImg.js')(schema)
      require('./virtuals/getNavCountryFlagImg.js')(schema)
      require('./virtuals/getNavCountryFlagAlt.js')(schema)

      // header
      require('./virtuals/getHeaderTitle.js')(schema)

      // serviceDetails
      require('./virtuals/getServiceDetailsLogoImg.js')(schema)
      require('./virtuals/getServiceDetailsLogoAlt.js')(schema)

      // about
      require('./methods/getAboutBreadcrumb.js')(schema)

      // serviceDownGrid
      require('./statics/getServiceDownGrid.js')(schema, schemaBaseReferences, schemaAdditionalReferences)

      // modal
      require('./statics/getModalGeolocationFlags.js')(schema, schemaBaseReferences, schemaAdditionalReferences)
      require('./statics/getModalCountryAlternativeFlags.js')(schema, schemaBaseReferences, schemaAdditionalReferences)
      require('./statics/getModalPositionPushingFlags.js')(schema, schemaBaseReferences, schemaAdditionalReferences)

      // cityPagesList
      require('./statics/getCityPagesList.js')(schema, schemaBaseReferences, schemaAdditionalReferences)

      // datalayer
}


