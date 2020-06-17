const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        if (value === 'report-without-description' || value === 'report-with-description') return true
        return false
      },
      message: props => `${props.value} is not one of the two valid report strings!`
    },
  },
  languageCode: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2,
  },
  countryCode: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2,
  },
  nameHyphen: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 100,
  },
  cityName: {
    type: String,
    minlength: 0,
    maxlength: 100,
  },
  description: {
    type: String,
    minlength: 0,
    maxlength: 100,
  },
  createdAt: { // verwijder dit in productie
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
})

reportSchema.set('autoIndex', false)
reportSchema.set('autoCreate', false)
reportSchema.set('minimize', false)
// reportSchema.set('timestamps', {
//   currentTime: () => new Date().toISOString() // dit is GMT+0000 en dus wat je nodig hebt
// })

const schemaBaseReferences = {
  languageCode: 'languageCode',
  countryCode: 'countryCode',
  nameHyphen: 'nameHyphen',
  cityName: 'asciiNameHyphen',
}

const schemaAdditionalReferences = {
   type: 'type'
}

require('./statics/getDatalayerServiceStatus.js')(reportSchema, schemaBaseReferences,schemaAdditionalReferences)
require('./statics/getDatalayerNumberOfReports.js')(reportSchema, schemaBaseReferences,schemaAdditionalReferences)

module.exports = mongoose.model('Report', reportSchema)