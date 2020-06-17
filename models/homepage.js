const mongoose = require('mongoose')

const doctype = require('./blocks/doctype.js')
const head = require('./blocks/head.js')
const nav = require('./blocks/nav.js')
const header = require('./blocks/header.js')
const faq = require('./blocks/faq.js')
const about = require('./blocks/about.js')
const modal = require('./blocks/modal.js')
const datalayer = require('./blocks/datalayer.js')
const serviceDownGrid = require('./blocks/serviceDownGrid.js')

const homepageSchema = new mongoose.Schema({
  viewLocals: {
    doctype,
    head,
    body: {
      nav,
      header,
      faq,
      about,
      serviceDownGrid,
      modal,
      datalayer,
  },
  },
})

const setSchemaFunctions = require('./config.js')
setSchemaFunctions(homepageSchema)

module.exports = mongoose.model('Homepage', homepageSchema)
