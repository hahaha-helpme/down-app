// homepage view
module.exports = {
  locals: {
    viewLocals: {
      doctype: {
        language: 'en'
      },

      head: {
        canonical: 'https://striped.com/at',
        title: 'Is this service down? Find out now',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt asperiores qui tempora repudiandae?',
        relAlternate: [{
          href: 'https://striped.com/at',
          hrefLang: 'de-AT'
        }, {
          href: 'https://stripe.com/en',
          hrefLang: 'en-NL'
        }, {
          href: 'https://stripe.com/nl',
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
            header: 'This a page for spain.'
          }
        },

        faq: {
          text: {
            header: 'Lorem ipsum dolor sit amet, consect etuer',

            accordion: [{
              question: 'Is Facebook down op dit moment (geeft langertermijn antwoord)?',
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

        serviceDownGrid: [{
          link: 'http://example.org/',
          header: 'Spectrum',
          status: 0.123,
          img: 'https://cdn2.downdetector.com/static/uploads/c/200x100/9256e/spectrum_logo_1.png',
          alt: 'test',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, {
          link: 'http://example.org/',
          header: 'Fortnite',
          status: 0.775,
          img: 'https://cdn2.downdetector.com/static/uploads/c/200x100/2fd30/FortniteLogo3.png',
          alt: 'test',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, {
          link: 'http://example.org/',
          header: 'Comcast',
          status: 0.572,
          img: 'https://cdn2.downdetector.com/static/uploads/c/200x100/1a441/Comcast_logo_2012.png',
          alt: 'test',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, {
          link: 'http://example.org/',
          header: 'Verizon',
          status: 0.773,
          img: 'https://cdn2.downdetector.com/static/uploads/c/200x100/546b7/verizon-logo.png',
          alt: 'test',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, {
          link: 'http://example.org/',
          header: 'Centerylink',
          status: 0.853,
          img: 'https://cdn2.downdetector.com/static/uploads/c/200x100/71fca/centurylinklogo.png',
          alt: 'test',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, {
          link: 'http://example.org/',
          header: 'Instagram',
          status: 0.703,
          img: 'https://cdn2.downdetector.com/static/uploads/c/200x100/a4720/Instagram_Logo_Large.png',
          alt: 'test',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, {
          link: 'http://example.org/',
          header: 'ATT',
          status: 0.073,
          img: 'https://cdn2.downdetector.com/static/uploads/c/200x100/005f6/att.png',
          alt: 'test',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, {
          link: 'http://example.org/',
          header: 'test tekst',
          status: 0.773,
          img: 'https://source.unsplash.com/random/150x100',
          alt: 'test',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, {
          link: 'http://example.org/',
          header: 'test tekst',
          status: 0.973,
          img: 'https://source.unsplash.com/random/150x100',
          alt: 'test',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }],

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
                2: 'Please provide one or two words.'
              },
              button: 'Submit'
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

        datalayer: {
          id: 6,
          company: 'facebbok',
          link: 'http://example.org/',
          random: 'ipsum'
        }

      }
    }
  }
}
