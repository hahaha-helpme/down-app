module.exports = function (schema) {
  schema.methods.getAboutBreadcrumb = function (req) {
    const {
      hostname,
      protocol,
      originalUrl
    } = req
    const url = originalUrl.split('?').shift()

    const urlElements = url.split('/').slice(1)
    const breadcrumb = []

    for (let i = 0; i < urlElements.length; ++i) {
      breadcrumb.push({
        link: `${protocol}://${hostname}/${urlElements.slice(0, i + 1).join('/')}`,
        position: i + 1,
        anchor: `${urlElements.slice(i, i + 1)}`
      })
    }
    return breadcrumb
  }
}
