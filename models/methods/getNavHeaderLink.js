module.exports = function (schema) {
  schema.methods.getNavHeaderLink = function (req, res) {
    const {
      hostname,
      protocol
    } = req

    const {
      reqLanguageCode,
      reqCountryCode
    } = res.locals

    return `${protocol}://${hostname}/${reqLanguageCode}-${reqCountryCode}`
  }
}
