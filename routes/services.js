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

     // finding upper control limit for c chart
     let reportsCountsArr = await Report.getDatalayerServiceStatus(res)
     if(reportsCountsArr.length !== 0){
       let summedTotalCount = 0;
       let numberOfReports = reportsCountsArr.length;
 
       reportsCountsArr.forEach(obj => {
         summedTotalCount += obj.count;
       })
       
       const centerline = summedTotalCount/numberOfReports;
       const upperControlLimit = centerline + 3 * Math.sqrt(centerline);
       const latestCountOfreports = reportsCountsArr[0].count
 
       // setting datalayer service status
       if(upperControlLimit > latestCountOfreports){
         pageDatalayer.service.status = 0
       } else {
         pageDatalayer.service.status = 1
       }
     } else {
         pageDatalayer.service.status = 0
     }
     
 
     let timeReportsSequence = await Report.getDatalayerNumberOfReports(res); 
 
     // deze waardes zouden eigenlijk in een config file moeten zitten
     const msPerMinute = 60000;
     const minutesInHour = 60;
     const timeBlockLengthInMinutes = 10;
     const selectionHours = 12; 
     const sequenceLength = (selectionHours * minutesInHour)/timeBlockLengthInMinutes ;
    
     // if sequence is totally empty add current time
     if(timeReportsSequence.length === 0) {
       timeReportsSequence.push({count:0, time:new Date().toISOString()})
     } else{
     // add 10 minutes to all times in sequence
     timeReportsSequence.forEach(date => {
       date.time = new Date(Date.parse(date.time) + (timeBlockLengthInMinutes * msPerMinute))
     })
     }
 
     // add missing dates to sequence
     let maxTimeValue = Math.max.apply(Math, timeReportsSequence.map(function(object) { return Date.parse(object.time); }))
     for (let i = 0; i < sequenceLength; i++) {
       let sequenceDate = new Date(maxTimeValue - (i * msPerMinute * timeBlockLengthInMinutes)).toISOString();
       let conditinal = timeReportsSequence.some(e => e.time === sequenceDate)
       if(!conditinal){
         timeReportsSequence.push({count:0,time:sequenceDate})
       }  
     }
    
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
    pageHead.relAlternate = await Service.getHeadRelAlternate(req, res)

    // ** nav **
    const pageNav = page.viewLocals.body.nav
    pageNav.links.logo = page.getNavlogoLink(req, res)
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
    pageAbout.links.breadcrumb = page.getAboutBreadcrumb(req, res)

    // ** modal **
    const pageModal = page.viewLocals.body.modal
    pageModal.geolocation.flags = await Service.getModalGeolocationFlags(req, res)
    pageModal.positionPushing.flags = await Service.getModalPositionPushingFlags(req, res)
    pageModal.countryAlternative.flags = await Homepage.getModalCountryAlternativeFlags(req, res)

    // ** advertisment **

    // ** commentSection ** 

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
