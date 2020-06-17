// service-down view
module.exports = {
  locals: {
    viewLocals: {
      doctype: {
        language: 'en'
      },

      head: {
        canonical: 'https://striped.com/at',
        title: 'Is this service down??? Find out now',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt asperiores qui tempora repudiandae?',
        relAlternate: [{
          href: 'http://example.org/',
          hrefLang: 'de-AT'
        }, {
          href: 'http://example.org/',
          hrefLang: 'en-NL'
        }, {
          href: 'http://example.org/',
          hrefLang: 'x-default'
        }]
      },

      body: {

        nav: {
          links: {
            logo: 'http://example.org/',
            header: 'http://example.org/'
          },
          images: {
            logo: '../../../dist/images/logos/this-company.svg',
            flag: '../../../dist/images/flags/128-spain.svg'
          },
          text: {
            header: 'IsItDown?'
          },
          alt: {
            logo: 'logo',
            flag: 'logo'
          }
        },

        header: {
          text: {
            header: 'Facebook is currently down for 46 minutes'
          },
        },

        downChart: {
          text: {
            header: 'Number of people that report that they experience problems'
          }
        },

        reportProblem: {
          text: {
            header: 'Lorem ipsum dolor sit amet, consect etuer',
            button: 'I\'m experiencing problems with ...'
          }

        },

        serviceDetails: {
          text: {
            header: 'Lorem 888 ipsum dolor',
            paragraph: {
              1: 'quaeraniam, quis nostrum exerci tationem ullam corporis suscipit',
              2: 'cod quia consequuntur magni dolores eos qui ratio',
              3: 'Lm t odit aut fugit, sed quia consequuntur magni dr sit amet, consec tetuer.',
              4: 'color sit amet odit aut fugit, sed quia res eos qui rat '
            }
          },
          images: {
            service: '../../../dist/images/logos/facebook.svg'
          },
          alt: {
            service: 'comp logo'
          }

        },

        faq: {
          text: {
            header: 'Lorem ipsum dolor sit amet, consect etuer',

            accordion: [{
              question: 'langertermijn antwoord over hoevaak fb down?',
              answer: {
                1: 'Most unopened items in new condition and returned within <strong>90 days</strong> will receive a refund or exchange. Some items have a modified return policy noted on the receipt or packing slip. Items that are opened or damaged or do not have a receipt may be denied a refund or exchange. Items purchased online or in-store may be returned to any store. Online purchases may be returned via a major parcel carrier. <a href="http://example.com/returns"> Click here </a> to initiate a return.',
                2: 'color sit amet, consec. - link naar about nav '
              }
            }, {
              question: 'Hoe vaak gaat Facebook down per jaar?',
              answer: {
                1: 'Lorem ipsum dolor sit amet, consec tetuer.',
                2: 'color sit amet, consec. - link naar about nav '
              }
            }, {
              question: 'Hoe doen andere sociale platformen het?',
              answer: {
                1: 'Lorem ipsum dolor sit amet, consectetuer.',
                2: 'color sit amet, consec. - link naar about nav '
              }
            }]
          }
        },

        about: {
          text: {
            header: 'Lorem ipsum dolor sit amet, consect etuer',
            paragraph: {
              1: 'Lorem ipsum dolor sit amet, consectetuer.',
              2: 'color sit amet, consec. - link naar about nav ',
              3: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" rel="nofollow">Privacy Policy</a> and <a href="https://policies.google.com/terms" rel="nofollow">Terms of Service</a> apply.',
              4: 'Lorem ipsum dolor sit amet, consectetuer.',
              5: 'De site bestaat uit de volgende onderdelen en je bevind je nu op'
            }
          },
          links: {
            breadcrumb: [{
              link: 'http://example.org/',
              position: 1,
              anchor: 'Lorem'
            }, {
              link: 'http://example.org/',
              position: 2,
              anchor: 'ipsum'
            }, {
              link: 'http://example.org/',
              position: 3,
              anchor: 'ipsum2'
            }]
          }
        },

        modal: {
          about: {
            text: {
              header: 'Lorem ipsum dolor sit amet, consect etuer',
              paragraph: {
                1: 'https:// support.apple.com /en-us/HT210425 - Lorem ipsum dolor sit amet, consectetuer. Lorem ipsum dolor sit amet, consec.',
                2: 'Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec.'
              }
            },
            images: {
              logo: '../../../dist/images/logos/this-company.png'
            },
            alt: {
              logo: 'logo of ...company name'
            }

          },
          reportProblem: {
            text: {
              header: 'What isn\'t working?',
              paragraph: {
                1: 'Please let us know what issue you are experiencing with Facebook.',
                2: 'Please provide one or two words.',
              },
              button:'Submit',
            }

          },

          geolocation: {
            text: {
              header: 'alle andere geo locaties',
              paragraph: {
                1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae modi alias.',
                2: 'Animi inventore in iure nisi sed nihil doloremque!'
              }
            },
            flags: [{
              link: 'https://stripe.com/at',
              anchor: '1-AT',
              img: '../../../dist/images/flags/128-spain.svg',
              alt: 'test'
            }, {
              link: 'https://stripe.com/at',
              anchor: '1-AT',
              img: '../../../dist/images/flags/128-spain.svg',
              alt: 'test'
            }, {
              link: 'https://stripe.com/at',
              anchor: '1-AT',
              img: '../../../dist/images/flags/128-spain.svg',
              alt: 'test'
            }]
          },

          positionPushing: {
            text: {
              header: 'alle andere push pagina',
              paragraph: {
                1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae modi alias.',
                2: 'Animi inventore in iure nisi sed nihil doloremque!'
              }
            },
            flags: [{
              link: 'https://stripe.com/at',
              anchor: '1-AT',
              img: '../../../dist/images/flags/128-spain.svg',
              alt: 'test'
            }, {
              link: 'https://stripe.com/at',
              anchor: '1-AT',
              img: '../../../dist/images/flags/128-spain.svg',
              alt: 'test'
            }, {
              link: 'https://stripe.com/at',
              anchor: '1-AT',
              img: '../../../dist/images/flags/128-spain.svg',
              alt: 'test'
            }]
          },

          countryAlternative: {
            text: {
              header: 'alle andere landhome pages',
              paragraph: {
                1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae modi alias.',
                2: 'Animi inventore in iure nisi sed nihil doloremque!88'
              }
            },
            flags: [{
              link: 'https://stripe.com/at',
              anchor: '1-AT',
              img: '../../../dist/images/flags/128-spain.svg',
              alt: 'test'
            }, {
              link: 'https://stripe.com/at',
              anchor: '1-AT',
              img: '../../../dist/images/flags/128-spain.svg',
              alt: 'test'
            }, {
              link: 'https://stripe.com/at',
              anchor: '1-AT',
              img: '../../../dist/images/flags/128-spain.svg',
              alt: 'test'
            }]
          }

        },

        advertisement: {
          text: {
            header: 'Lorem ipsum dolor sit amet, consectetuer'
          }
        },
        
        commentsSection: {
          text: {
            header: 'Dolor, sit amet consectetur adipisicing elit'
          },
          dataLocale: 'en_US'
        },

        datalayer: {
         
          // ************ metadata ************ //
          thisCompany:{
            logoImg: '../../../dist/images/logos/this-company.svg',
          },

          service: {
            status: 1,
            downSince: "2020-05-21T15:44:00.000Z",
            nameCase: 'Facebook',
            nameHyphen: 'clash-of-clans',
            logoImage: '../../../dist/images/logos/facebook.svg',
            logoImageAlt: 'twitter logo',
          },
            
          seo: {
            cumulativeSearchVolume: 9006,
          },
          
          language: {
            name: 'Dutch',
            nameHyphen: 'dutch',
            endonym: 'Nederlands',
            code: 'en'
          },
          country: {
            geonameCode: 12,
            name: 'Netherlands',
            nameHyphen: 'netherlands',
            code: 'us',
            flagImage: '../../../dist/images/flags/237-netherlands.svg',
            flagImageAlt: 'the flag of the Netherlands'
          },
          state: {
            geonameCode: 12,
            name: 'Herat',
            nameHyphen: 'herat',
            asciiName: 'Herat',
            asciiNameHyphen: 'herat',
            code: 11
          },
          city: {
            geonameCode: 12,
            name: 'Zuidwijk',
            nameHyphen: 'zuidwijk',
            asciiName: 'Zuidwijk',
            asciiNameHyphen: 'zuidwijk'
          },
          
          // ************ service ************ //
          serviceView:{
            header:{
              notDown:'${company} is not experiencing problems',
              maybeDown:'$ Bei ${company} gibt es im Moment keine Probleme.',
              isDown: '${company} is experiencing problems',
              },

            modal: {
              reportProblem: {
                  header: 'Thank you for your submittion!',
                  paragraph: 'We received your submission',
              }
            },
            downChart: {
              labelNow:'now',
              tooltipLabel: 'reports',
              timeReportsSequence:[{"count":1,"time":"2020-05-21T15:44:00.000Z"},{"count":1,"time":"2020-05-21T15:24:00.000Z"},{"count":1,"time":"2020-05-21T15:14:00.000Z"},{"count":1,"time":"2020-05-21T14:34:00.000Z"},{"count":1,"time":"2020-05-21T14:14:00.000Z"},{"count":3,"time":"2020-05-21T14:04:00.000Z"},{"count":1,"time":"2020-05-21T13:54:00.000Z"},{"count":1,"time":"2020-05-21T13:24:00.000Z"},{"count":1,"time":"2020-05-21T13:14:00.000Z"},{"count":1,"time":"2020-05-21T12:54:00.000Z"},{"count":1,"time":"2020-05-21T12:44:00.000Z"},{"count":2,"time":"2020-05-21T12:34:00.000Z"},{"count":1,"time":"2020-05-21T12:24:00.000Z"},{"count":1,"time":"2020-05-21T12:14:00.000Z"},{"count":1,"time":"2020-05-21T12:04:00.000Z"},{"count":3,"time":"2020-05-21T11:54:00.000Z"},{"count":2,"time":"2020-05-21T11:24:00.000Z"},{"count":1,"time":"2020-05-21T11:14:00.000Z"},{"count":2,"time":"2020-05-21T10:54:00.000Z"},{"count":1,"time":"2020-05-21T10:44:00.000Z"},{"count":1,"time":"2020-05-21T10:04:00.000Z"},{"count":2,"time":"2020-05-21T09:44:00.000Z"},{"count":2,"time":"2020-05-21T09:24:00.000Z"},{"count":1,"time":"2020-05-21T08:54:00.000Z"},{"count":2,"time":"2020-05-21T08:44:00.000Z"},{"count":1,"time":"2020-05-21T08:34:00.000Z"},{"count":1,"time":"2020-05-21T08:24:00.000Z"},{"count":3,"time":"2020-05-21T07:54:00.000Z"},{"count":2,"time":"2020-05-21T07:34:00.000Z"},{"count":1,"time":"2020-05-21T07:24:00.000Z"},{"count":1,"time":"2020-05-21T07:14:00.000Z"},{"count":1,"time":"2020-05-21T07:04:00.000Z"},{"count":2,"time":"2020-05-21T06:54:00.000Z"},{"count":4,"time":"2020-05-21T06:44:00.000Z"},{"count":4,"time":"2020-05-21T06:04:00.000Z"},{"count":1,"time":"2020-05-21T05:54:00.000Z"},{"count":1,"time":"2020-05-21T05:14:00.000Z"},{"count":2,"time":"2020-05-21T04:54:00.000Z"},{"count":1,"time":"2020-05-21T04:34:00.000Z"},{"count":3,"time":"2020-05-21T04:24:00.000Z"},{"count":1,"time":"2020-05-21T04:14:00.000Z"},{"count":1,"time":"2020-05-21T03:54:00.000Z"}],
             },
            }, 
        
          // ************ homepage ************ //
          homepageView:{
            header: 'This is page for spain',
          },
          },
        
     }
    }
  }
}
