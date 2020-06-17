const mongoose = require('mongoose')

module.exports = {

    // ************ metadata ************ //
    thisCompany:{
      logoImg: String,
    },

    service: {
      status: Number,
      downSince: mongoose.Mixed,
      nameCase: String,
      nameHyphen: String,
      logoImage: String,
      logoImageAlt: String,
    },
         
    seo: {
        cumulativeSearchVolume:Number,
    },
    
      language: {
        name: String,
        nameHyphen: String,
        endonym: String,
        code: String
      },
      country: {
        geonameCode: Number,
        name: String,
        nameHyphen: String,
        code: String,
        flagImage: String,
        flagImageAlt: String
      },
      state: {
        geonameCode: Number,
        name: String,
        nameHyphen: String,
        asciiName: String,
        asciiNameHyphen: String,
        code: mongoose.Mixed
      },
      city: {
        geonameCode: Number,
        name: String,
        nameHyphen: String,
        asciiName: String,
        asciiNameHyphen: String
      },
    
      // ************ service ************ //
      serviceView:{

        header:{
          notDown: String,
          maybeDown: String,
          isDown: String,
          },

        modal: {
          reportProblem: {
               header: String,
               paragraph: String,
           }
         },
       
        downChart: {
          labelNow: String,
          tooltipLabel: String,
          timeReportsSequence: Array,
        },
 },
      // ************ homepage ************ //
      homepageView:{
        header: String,
      },

}