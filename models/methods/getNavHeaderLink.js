module.exports = function (schema) {
  schema.methods.getNavHeaderLink = function (req, res) {

    const {
      reqLanguageCode,
      reqCountryCode
    } = res.locals

    return `/${reqLanguageCode}-${reqCountryCode}`
  }
}
