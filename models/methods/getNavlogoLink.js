module.exports = function (schema) {
  schema.methods.getNavlogoLink = function (req, res) {
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
