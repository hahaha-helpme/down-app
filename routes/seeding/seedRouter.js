const express = require('express')
const router = express.Router()

const serviceAndHomepageJSON = require('./serviceAndHomepageSeedData.js').template_content
const reportJSON = require('./reportsSeedData.js').reports

const mongoose = require('mongoose')
const Service = require('../../models/service')
const Homepage = require('../../models/homepage')
const Report = require('../../models/report')

router.get('/', async (req, res, next) => {
  try {

    function serviceAndHomepageTemplate(seed){

      return {
        viewLocals: {
          doctype: {
            language: seed.doctype_language
          },
  
          head: {
            canonical: seed.head_canonical,
            title: seed.head_title,
            favicon:{
              appleTouchIcon: seed.head_favicon_appleTouchIcon,
              favicon32x32: seed.head_favicon_favicon32x32,
              favicon16x16: seed.head_favicon_favicon16x16,
              siteWebmanifest: seed.head_favicon_siteWebmanifest,
              safariPinnedTab: seed.head_favicon_safariPinnedTab,
            },
            description: seed.head_description,
            relAlternate: seed.head_relAlternate
          },
  
          body: {
  
            nav: {
              links: {
                logo: seed.nav_links_logo,
                header: seed.nav_links_header
              },
              images: {
                logo: seed.nav_images_logo,
                flag: seed.nav_images_flag
              },
              text: {
                header: seed.nav_text_header
              },
              alt: {
                logo: seed.nav_alt_logo,
                flag: seed.nav_alt_flag
              }
            },
  
            header: {
              text: {
                header: seed.header_text_header
              }
            },
  
            downChart: {
              text: {
                header: seed.downChart_text_header
              }
            },
  
            reportProblem: {
              text: {
                header: seed.reportProblem_text_header,
                button: seed.reportProblem_text_button
              }
  
            },
  
            serviceDetails: {
              text: {
                header: seed.serviceDetails_text_header,
                paragraph: {
                  1: seed.serviceDetails_text_paragraph_1,
                  2: seed.serviceDetails_text_paragraph_2,
                  3: seed.serviceDetails_text_paragraph_3,
                  4: seed.serviceDetails_text_paragraph_4
                }
              },
              images: {
                service: seed.serviceDetails_images_service
              },
              alt: {
                service: seed.serviceDetails_alt_service
              }
            },
  
            faq: {
              text: {
                header: seed.faq_text_header,
  
                accordion: [{
                  question: seed.faq_text_accordion_question_A1,
                  answer: {
                    1: seed.faq_text_accordion_answer_A1,
                    2: seed.faq_text_accordion_answer_A2
                  }
                }, {
                  question: seed.faq_text_accordion_question_B1,
                  answer: {
                    1: seed.faq_text_accordion_answer_B1,
                    2: seed.faq_text_accordion_answer_B2
                  }
                }, {
                  question: seed.faq_text_accordion_question_C1,
                  answer: {
                    1: seed.faq_text_accordion_answer_C1,
                    2: seed.faq_text_accordion_answer_C2
                  }
                }]
              }
            },
  
            about: {
              text: {
                header: seed.about_text_header,
                paragraph: {
                  1: seed.about_text_paragraph_1,
                  2: seed.about_text_paragraph_2,
                  3: seed.about_text_paragraph_3,
                  4: seed.about_text_paragraph_4,
                  5: seed.about_text_paragraph_5
                }
              },
              links: {
                breadcrumb: seed.about_links_breadcrumb
              }
            },
  
            modal: {
              about: {
                text: {
                  header: seed.modal_about_text_header,
                  paragraph: {
                    1: seed.modal_about_text_paragraph_1,
                    2: seed.modal_about_text_paragraph_2
                  }
                },
                images: {
                  logo: seed.modal_about_images_logo
                },
                alt: {
                  logo: seed.modal_about_alt_logo
                }
  
              },
              reportProblem: {
                text: {
                  header: seed.modal_reportProblem_text_header,
                  paragraph: {
                    1: seed.modal_reportProblem_text_paragraph_1,
                    2: seed.modal_reportProblem_text_paragraph_2,
                  },
                  button: seed.modal_reportProblem_text_button,
                }
  
              },
  
              geolocation: {
                text: {
                  header: seed.modal_geolocation_text_header,
                  paragraph: {
                    1: seed.modal_geolocation_text_paragraph_1,
                    2: seed.modal_geolocation_text_paragraph_2
                  }
                },
                flags: seed.modal_geolocation_flags
              },
  
              positionPushing: {
                text: {
                  header: seed.modal_positionPushing_text_header,
                  paragraph: {
                    1: seed.modal_positionPushing_text_paragraph_1,
                    2: seed.modal_positionPushing_text_paragraph_2
                  }
                },
                flags: seed.modal_positionPushing_flags
              },
  
              countryAlternative: {
                text: {
                  header: seed.modal_countryAlternative_text_header,
                  paragraph: {
                    1: seed.modal_countryAlternative_text_paragraph_1,
                    2: seed.modal_countryAlternative_text_paragraph_2
                  }
                },
                flags: seed.modal_countryAlternative_flags
              }
  
            },
  
            advertisement: {
              text: {
                header: seed.advertisement_text_header
              }
            },
  
            commentsSection: {
              text: {
                header: seed.commentsSection_text_header
              },
              dataLocale: seed.commentsSection_dataLocale
            },
  
            datalayer: {
  
              
            // ************ metadata ************ //
              thisCompany:{
                logoImg: seed.datalayer_thisCompany_logoImg,
              },
  
              service: {
                status: seed.datalayer_service_status,
                downSince: seed.datalayer_service_minutesDown,
                nameCase: seed.datalayer_service_nameCase,
                nameHyphen: seed.datalayer_service_nameHyphen,
                logoImage: seed.datalayer_service_logoImage,
                logoImageAlt: seed.datalayer_service_logoImageAlt,
              },
  
              seo: {
                cumulativeSearchVolume: seed.datalayer_service_seo_cumulativeSearchVolume,
              },
  
              language: {
                name: seed.datalayer_language_name,
                nameHyphen: seed.datalayer_language_nameHyphen,
                endonym: seed.datalayer_language_endonym,
                code: seed.datalayer_language_code
              },
  
              country: {
                geonameCode: seed.datalayer_country_geonameCode,
                name: seed.datalayer_country_name,
                nameHyphen: seed.datalayer_country_nameHyphen,
                code: seed.datalayer_country_code,
                flagImage: seed.datalayer_country_flagImage,
                flagImageAlt: seed.datalayer_country_flagImageAlt
              },
              state: {
                geonameCode: seed.datalayer_state_geonameCode,
                name: seed.datalayer_state_name,
                nameHyphen: seed.datalayer_state_nameHyphen,
                asciiName: seed.datalayer_state_asciiName,
                asciiNameHyphen: seed.datalayer_state_asciiNameHyphen,
                code: seed.datalayer_state_code
              },
              city: {
                geonameCode: seed.datalayer_city_geonameCode,
                name: seed.datalayer_city_name,
                nameHyphen: seed.datalayer_city_nameHyphen,
                asciiName: seed.datalayer_city_asciiName,
                asciiNameHyphen: seed.datalayer_city_asciiNameHyphen
              },
  
              serviceView:{
  
                header:{
                  notDown: seed.datalayer_serviceView_header_notDown,
                  maybeDown: seed.datalayer_serviceView_header_maybeDown,
                  isDown: seed.datalayer_serviceView_header_isDown,
                  },
  
                modal: {
                  reportProblem: {
                        header: seed.datalayer_serviceView_modal_reportProblem_header,
                        paragraph: seed.datalayer_serviceView_modal_reportProblem_paragraph,
                    }
                  },
                
                downChart: {
                  labelNow: seed.datalayer_serviceView_downChart_labelNow,
                  tooltipLabel: seed.datalayer_serviceView_downChart_tooltipLabel,
                  timeReportsSequence: seed.datalayer_serviceView_downChart_timeReportsSequence
                },
  
              },
  
              homepageView:{
                header: seed.datalayer_homepageView_header,
              },
  
            },
          }
        }
      }

    }
    

    const reportDataReadyForImport = reportJSON.map(seedData => {
      return seedData
    })

    let serviceDataReadyForImport = [];
    serviceAndHomepageJSON.forEach(seedData => {
      if(seedData.datalayer_service_nameHyphen){
        serviceDataReadyForImport.push(serviceAndHomepageTemplate(seedData))
      }
       return
    })

    let homepageDataReadyForImport = []
    serviceAndHomepageJSON.forEach(seedData => {
      if(!seedData.datalayer_service_nameHyphen){
        homepageDataReadyForImport.push(serviceAndHomepageTemplate(seedData))
      }
       return
    })

    let d = mongoose.connection.db.dropCollection('homepages', function(err, result) {})
    let e = mongoose.connection.db.dropCollection('reports', function(err, result) {})
    let f = mongoose.connection.db.dropCollection('services', function(err, result) {})

    Promise.all([d,e,f])

    let a = Homepage.insertMany(homepageDataReadyForImport)
    let b = Report.insertMany(reportDataReadyForImport)
    let c = Service.insertMany(serviceDataReadyForImport)

    Promise.all([a,b,c])

    res.send('Succesfully seeded database!')
  } catch (err) {
    console.log(err)
    next(err)
  }
})

module.exports = router



