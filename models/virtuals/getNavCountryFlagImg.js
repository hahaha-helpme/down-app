module.exports = function (schema) {
  schema.virtual('getNavCountryFlagImg').get(function () {
    return this.viewLocals.body.datalayer.country.flagImage
  })
}
