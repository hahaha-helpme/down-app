module.exports = function (schema) {
  schema.virtual('getServiceDetailsLogoAlt').get(function () {
    return this.viewLocals.body.datalayer.service.logoImageAlt
  })
}
