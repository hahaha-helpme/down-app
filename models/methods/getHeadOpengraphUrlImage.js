module.exports = function (schema) {
    schema.methods.getHeadOpengraphUrlImage = function (req) {
      const {
        hostname,
        protocol,
        originalUrl
      } = req
  
      const url = originalUrl.split('?').shift()
  
      return `${protocol}://${hostname}/opengraph/og-image.jpg`
    }
  }
  