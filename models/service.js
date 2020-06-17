const mongoose = require('mongoose')

const doctype = require('./blocks/doctype.js')
const head = require('./blocks/head.js')
const nav = require('./blocks/nav.js')
const header = require('./blocks/header.js')
const downChart = require('./blocks/downChart.js')
const reportProblem = require('./blocks/reportProblem.js')
const serviceDetails = require('./blocks/serviceDetails.js')
const faq = require('./blocks/faq.js')
const about = require('./blocks/about.js')
const modal = require('./blocks/modal.js')
const commentsSection = require('./blocks/commentsSection.js')
const advertisement = require('./blocks/advertisement.js')
const datalayer = require('./blocks/datalayer.js')

const serviceSchema = new mongoose.Schema({
  viewLocals: {
    doctype,
    head,
    body: {
      nav,
      header,
      downChart,
      reportProblem,
      serviceDetails,
      faq,
      about,
      modal,
      advertisement,
      commentsSection,
      datalayer,
  },
  },
})

const setSchemaFunctions = require('./config.js')
setSchemaFunctions(serviceSchema)

module.exports = mongoose.model('Service', serviceSchema)
