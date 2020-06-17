module.exports = function (schema) {
  schema.methods.getHeadCanonical = function (req) {
    const {
      hostname,
      protocol,
      originalUrl
    } = req

    const url = originalUrl.split('?').shift()

    return `${protocol}://${hostname}${url}`
  }
}
