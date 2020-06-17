module.exports = function (schema) {
  schema.virtual('getHeadLanguage').get(function () {
    return this.viewLocals.body.datalayer.language.code
  })
}