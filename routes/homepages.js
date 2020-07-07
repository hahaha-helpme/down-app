const express = require('express')
const router = express.Router()

const createError = require('http-errors')

const Homepage = require('../models/homepage')
const Service = require('../models/service')

//const homepageController = require('../views/0-views/homepage/pug.config.js')

router.get('/', async (req, res, next)=> {
  try{
    
    let page = await Homepage.getViewLocals(res)
    if (!page) {next(createError(404, 'We can not find this page.'))}

    let [
      getHeadRelAlternateResult, 
      getServiceDownGridResult,
      getModalGeolocationFlagsResult,
      getModalPositionPushingFlagsResult,
      getModalCountryAlternativeFlagsResult,
    ] = await Promise.all([
      Homepage.getHeadRelAlternate(req, res), 
      Service.getServiceDownGrid(req, res),
      Homepage.getModalGeolocationFlags(req, res),
      Homepage.getModalPositionPushingFlags(req, res),
      Homepage.getModalCountryAlternativeFlags(req, res),
    ]);
    // ** datalayer **
    

    // ** doctype ** 
    page.viewLocals.doctype.language = page.getHeadLanguage

    // ** head **
    const pageHead = page.viewLocals.head
    pageHead.canonical = page.getHeadCanonical(req)
    pageHead.opengraph.url = page.getHeadOpengraphUrl(req)
    pageHead.opengraph.url.image = page.getHeadOpengraphUrlImage(req)
    pageHead.relAlternate = getHeadRelAlternateResult

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

    // ** faq **
    // hier missen functies die content ophalen

    // ** about **
    const pageAbout = page.viewLocals.body.about
    pageAbout.links.breadcrumb = page.getAboutBreadcrumb(req)

    // ** serviceDownGrid **
    let pageServiceDownGrid = page.viewLocals.body.serviceDownGrid
    let servicesArr = getServiceDownGridResult

    servicesArr.forEach(service =>{
      service.status = 0
    })
    
    page.viewLocals.body.serviceDownGrid = servicesArr;

    // ** modal **
    const pageModal = page.viewLocals.body.modal
    pageModal.geolocation.flags = getModalGeolocationFlagsResult
    pageModal.positionPushing.flags = getModalPositionPushingFlagsResult
    pageModal.countryAlternative.flags = getModalCountryAlternativeFlagsResult

    page = page.toObject()

    //res.json(page)
    //res.json(servicesController.locals)
    res.render('homepage', page);
    //res.render('homepage',homepageController.locals);
  } catch (err){
    if (process.env.NODE_ENV === 'development') {
      console.error(err)
    }
    next(createError(500, 'There was an error on the server and the request could not be completed.'))
  }
  
});

module.exports = router
