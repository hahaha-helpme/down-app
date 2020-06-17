module.exports = function (schema) {
  schema.virtual('getNavCountryFlagAlt').get(function () {
    return this.viewLocals.body.datalayer.country.flagImageAlt
  })
}
