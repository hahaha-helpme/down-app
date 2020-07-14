module.exports = function (schema) {
    schema.methods.getHeadOpengraphUrl = function (req) {
      const {
        hostname,
        protocol,
        originalUrl
      } = req
  
      const url = originalUrl.split('?').shift()
  
      return `${protocol}://${hostname}${url}`
    }
  }
  