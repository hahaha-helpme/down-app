const express = require('express')
const router = express.Router()

const createError = require('http-errors')

const Service = require('../models/service')
const Report = require('../models/report')
const Homepage = require('../models/homepage')

//const servicesController = require('../views/0-views/service/pug.config.js')

router.get('/', async (req, res, next) => {

  try {
    let page = await Service.getViewLocals(res)
    if (!page) {next(createError(404, 'We can not find this page.'))}

     // ** datalayer **
     const pageDatalayer = page.viewLocals.body.datalayer

     // deze waardes zouden eigenlijk in een config file moeten zitten
     const msPerMinute = 60000;
     const minutesInHour = 60;
     const hoursInDay = 24;     
     const selectionNumDays = 10;     
     const intervalInMinutes = 10;
     const sequenceCountForStatus = (selectionNumDays * hoursInDay * minutesInHour) / intervalInMinutes;

     let timeReportsSequence = await Report.getDatalayerServiceStatus(res); //await Report.getDatalayerNumberOfReports(res); 
     
     // if sequence is totally empty add current time
     if(timeReportsSequence.length === 0) {
       timeReportsSequence.push({count : 0, time : new Date()})
     } else{
     // add 10 minutes to all times in sequence
       timeReportsSequence.forEach(date => {
         date.time = new Date(Date.parse(date.time) + (intervalInMinutes * msPerMinute))
       })
     }

     // finding upper control limit for c chart
     //let reportsCountsArr = await Report.getDatalayerServiceStatus(res)

     if(timeReportsSequence.length !== 0){
      let summedTotalCount = 0;

      timeReportsSequence.forEach(obj => {
        summedTotalCount += obj.count;
      })

      const centerline = summedTotalCount/sequenceCountForStatus;
      const upperControlLimit = centerline + 20 * Math.sqrt(centerline);
      
      // setting datalayer service status
      const latestCountOfreports = timeReportsSequence[0].count || 0

      if(latestCountOfreports < upperControlLimit || latestCountOfreports < 5){
        pageDatalayer.service.status = 0
      } else {
        pageDatalayer.service.status = 1
      }
    } else {
        pageDatalayer.service.status = 0
    }

      //add missing x minute interval to sequence
      const selectionHours = 12; 
      const sequenceLength = (selectionHours * minutesInHour)/intervalInMinutes;
      let randomTimeOfSequence = Date.parse(timeReportsSequence[0].time)
      let currentDate = new Date()
      let currentDateMinus12Hours = Date.parse(currentDate) - selectionHours * minutesInHour * msPerMinute

      timeReportsSequence = timeReportsSequence.filter(interval => Date.parse(interval.time) > currentDateMinus12Hours)

      for (let i = 0; i < sequenceLength; i++) {
       let sequenceDate = new Date(randomTimeOfSequence + (i * msPerMinute * intervalInMinutes));
       let inFutureCheck = Date.parse(currentDate) >= Date.parse(sequenceDate)
       let alreadyInSequenceCheck = timeReportsSequence.some(e => Date.parse(e.time) === Date.parse(sequenceDate))
       if(!alreadyInSequenceCheck && inFutureCheck){
         timeReportsSequence.push({count:0,time:sequenceDate})
       }  
     }

     for (let i = 0; i < sequenceLength; i++) {
      let sequenceDate = new Date(randomTimeOfSequence - (i * msPerMinute * intervalInMinutes));
      let alreadyInSequenceCheck = timeReportsSequence.some(e => Date.parse(e.time) === Date.parse(sequenceDate))
      if(!alreadyInSequenceCheck){
        timeReportsSequence.push({count:0,time:sequenceDate})
      }  
    }

    timeReportsSequence = timeReportsSequence.filter(interval => Date.parse(interval.time) > currentDateMinus12Hours)


     // sort sequence
     timeReportsSequence.sort(function compare(b, a) {
       var dateA = new Date(a.time);
       var dateB = new Date(b.time);
       return dateA - dateB;
     });


     pageDatalayer.serviceView.downChart.timeReportsSequence = timeReportsSequence


    // ** doctype ** 
    page.viewLocals.doctype.language = page.getHeadLanguage

    // ** head **
    const pageHead = page.viewLocals.head
    pageHead.canonical = page.getHeadCanonical(req)
    pageHead.opengraph.url = page.getHeadOpengraphUrl(req)
    pageHead.opengraph.url.image = page.getHeadOpengraphUrlImage(req)
    pageHead.relAlternate = await Service.getHeadRelAlternate(req, res)

    // ** nav **
    const pageNav = page.viewLocals.body.nav
    pageNav.links.logo = page.getNavLogoLink(req, res)
    pageNav.links.header = page.getNavHeaderLink(req, res)
    pageNav.images.logo = page.getNavLogoImg
    pageNav.images.flag = page.getNavCountryFlagImg
    pageNav.alt.flag = page.getNavCountryFlagAlt

    // ** header **
    const pageHeader = page.viewLocals.body.header
    pageHeader.text.header = page.getHeaderTitle

    // ** downChart **

    // ** reportProblem **

    // ** serviceDetails **
    const pageServiceDetails = page.viewLocals.body.serviceDetails
    // hier missen functies die content ophalen
    pageServiceDetails.images.service = page.getServiceDetailsLogoImg
    pageServiceDetails.alt.service = page.getServiceDetailsLogoAlt

    // ** faq **    
    // hier missen functies die content ophalen

    // ** about **
    const pageAbout = page.viewLocals.body.about
    pageAbout.links.breadcrumb = page.getAboutBreadcrumb(req)

    // ** modal **
    const pageModal = page.viewLocals.body.modal
    pageModal.geolocation.flags = await Service.getModalGeolocationFlags(req, res)
    pageModal.positionPushing.flags = await Service.getModalPositionPushingFlags(req, res)
    pageModal.countryAlternative.flags = await Homepage.getModalCountryAlternativeFlags(req, res)

    // ** advertisment **

    // ** commentSection ** 

    // ** cityPagesList ** 
    page.viewLocals.body.cityPagesList = await Service.getCityPagesList(req, res)

    

    page = page.toObject()

    //res.json(page)
    //res.json(servicesController.locals)
    res.render('service', page);
    //res.render('service', servicesController.locals); 
  } catch (err) {
    console.error(err)
  }
})

router.post('/report-problem', async (req, res, next) => {
  const {
    type,
    languageCode,
    countryCode,
    nameHyphen,
    cityName,
    description
  } = req.body

   await new Report({
    type,
    languageCode,
    countryCode,
    nameHyphen,
    cityName,
    description
    }).save()

  res.status(200).end()
})

router.post('/report-problem-description', async (req, res, next) => {
  res.status(200).end()
})

module.exports = router
