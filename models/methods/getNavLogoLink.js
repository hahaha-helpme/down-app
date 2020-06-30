module.exports = function (schema) {
  schema.methods.getNavLogoLink = function (req, res) {

    const {
      reqLanguageCode,
      reqCountryCode
    } = res.locals

    return `/${reqLanguageCode}-${reqCountryCode}`
  }
}
