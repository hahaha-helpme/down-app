const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const mongoose = require('mongoose')

const createError = require('http-errors')
const compression = require('compression')
const logger = require('morgan')


const seedRouter = require('./routes/seeding/seedRouter') // verwijder mij later

const homepageRouter = require('./routes/homepages')
const serviceRouter = require('./routes/services')

const app = express()

// print mongoose in dev env
if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true)
}

// connect to mongoose
(async () => {
  try {
    mongoose.set('debug', false)
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useFindAndModify', false)
    mongoose.set('useCreateIndex', true)
    mongoose.set('useUnifiedTopology', true)
    await mongoose.connect(process.env.MONGODB_URI)

    console.log('Connected to Mongoose')
  } catch (err) {
    console.error(err)
  }
})()

mongoose.connection.on('error', err => {
  // logError(err); // echte functie van maken
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'))
}

// set security HTTP headers
app.use(helmet())

// gzip compression
app.use(compression())

// serve static files
app.use('/dist', express.static('dist'))

// parse urlencoded request body
app.use(express.urlencoded({ extended: false }))
// parse json request body
app.use(express.json())

// routing
const homepageRegex = ''
const countryRegex = '\\w{2}'
const languageRegex = '\\w{2}'
const serviceRegex = '[0-9a-z-]+'
const cityRegex = '[0-9a-z-]+'

const putParamsOnLocals = (req, res, next) => {
  const { languageCountry, serviceName = null, cityName = null } = req.params
  res.locals.reqLanguageCode = languageCountry.slice(0, 2)
  res.locals.reqCountryCode = languageCountry.slice(-2)
  res.locals.reqServiceName = serviceName
  res.locals.reqCityName = cityName
  next()
}

app.use('/seed-the-database', seedRouter)

app.use(`/:languageCountry(${languageRegex}-${countryRegex})/:serviceName(${serviceRegex})/:cityName(${cityRegex})`, putParamsOnLocals, serviceRouter)
app.use(`/:languageCountry(${languageRegex}-${countryRegex})/:serviceName(${serviceRegex})`, putParamsOnLocals, serviceRouter)
app.use(`/:languageCountry(${languageRegex}-${countryRegex})|(${homepageRegex})`, putParamsOnLocals, homepageRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, 'We can not find this page.'))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
