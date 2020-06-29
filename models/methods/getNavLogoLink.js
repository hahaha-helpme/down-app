module.exports = function (schema) {
  schema.methods.getNavLogoLink = function (req, res) {
    const {
      hostname,
      protocol,
      originalUrl
    } = req

    const {
      reqLanguageCode,
      reqCountryCode
    } = res.locals

    return `${protocol}://${hostname}/${reqLanguageCode}-${reqCountryCode}`
  }
}
