module.exports = function (schema) {
  schema.virtual('getNavLogoImg').get(function () {
    return this.viewLocals.body.datalayer.thisCompany.logoImg
  })
}
