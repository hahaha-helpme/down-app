module.exports = function (schema) {
  schema.virtual('getServiceDetailsLogoImg').get(function () {
    return this.viewLocals.body.datalayer.service.logoImage
  })
}
