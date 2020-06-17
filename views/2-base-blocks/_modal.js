// **********************
// open and close functionality
// **********************
const modalClasses = {
  freeze: {
    class: 'body',
    toggleClass: 'body_freeze-active'
  },
  blur: {
    class: '.modal',
    toggleClass: 'modal_visible'
  },
  modal: {
    class: '.blur',
    toggleClass: 'blur_blur-active'
  }
}

const buttonsAndContent = {
  reportProblem: {
    button: ['.reportProblem__button'],
    content: ['.modal__reportProblem'],
    visible: ['modal__reportProblem_visible']
  },
  countryChange: {
    button: ['.nav__lang-country-flag'],
    content: ['.modal__geoLocation-lists'],
    visible: ['modal__geoLocation-lists_visible']
  },
  about: {
    button: ['.nav__hamburger'],
    content: ['.modal__about', '.modal__positionPushing-lists', '.modal__countryAlternative-lists'],
    visible: ['modal__about_visible', 'modal__positionPushing-lists_visible', 'modal__countryAlternative-lists_visible']
  }
}

const hamburgerBtn = document.querySelector('.hamburger')
const modal = document.querySelector('.modal')
const submitBtn = document.querySelector('.modal__reportProblem-description-button')

const toggleModal = function () {
  for (const key in modalClasses) {
    const element = modalClasses[key]
    const modalclass = document.querySelector(element.class)
    const toggleThisClass = element.toggleClass
    modalclass.classList.toggle(toggleThisClass)
  }
}

const toggleModalContent = function (button) {
  for (const i in buttonsAndContent) {
    if (buttonsAndContent[i].button === button) {
      for (let j = 0; j < buttonsAndContent[i].content.length; ++j) {
        const toggleOnThisClass = document.querySelector(buttonsAndContent[i].content[j])
        const toggleThisClass = buttonsAndContent[i].visible[j]
        toggleOnThisClass.classList.toggle(toggleThisClass)
      }
    }
  }
}

// buttons that can be used to open modal
const buttonsToOpenmodal = function () {
  const buttonArray = []
  for (const i in buttonsAndContent) {
    buttonArray.push(buttonsAndContent[i].button)
  }
  return buttonArray
}

let storeButton

buttonsToOpenmodal().forEach(button => {
  const element = document.querySelector(button)
  if (element) {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      toggleModal()
      toggleModalContent(button)
      storeButton = button
    })
  }
})

// close the modal with hamburger button click
submitBtn.onclick = function (event) {
  event.preventDefault()
  toggleModal()
  toggleModalContent(storeButton)
}

// close the modal with hamburger button click
hamburgerBtn.onclick = function (event) {
  event.preventDefault()
  toggleModal()
  toggleModalContent(storeButton)
}

// close the modal with window click
window.onclick = function (event) {
  event.preventDefault()
  if (event.target == modal) {
    toggleModal()
    toggleModalContent(storeButton)
  }
}

// **********************
// send form problem report functionality
// **********************


const reportProblemDescriptionButton = document.querySelector('.modal__reportProblem-description-button')
let isDescriptionReportButtonAlreadyclickedBefore = false
const reportProblemDescriptionHeader = datalayer.serviceView.modal.reportProblem.header
const reportProblemDescriptionParagraph = datalayer.serviceView.modal.reportProblem.paragraph

reportProblemDescriptionButton.addEventListener('click', (event) => {
  event.preventDefault()

  const reportData = {
    type:'report-with-description',
    languageCode: datalayer.language.code,
    countryCode: datalayer.country.code,
    nameHyphen: datalayer.service.nameHyphen,
    cityName: datalayer.city.asciiNameHyphen,
    description: document.querySelector('.modal__reportProblem-description-text').value
  }

  const currentURL = window.location.href
  const url = `${currentURL}/report-problem`

  if (!isDescriptionReportButtonAlreadyclickedBefore) {
    fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportData)
    })
  }
  
  isDescriptionReportButtonAlreadyclickedBefore = true
  
  let header = document.querySelector('.modal__reportProblem-header-text');
  header.textContent = reportProblemDescriptionHeader;

  let paragraph = document.querySelector('.modal__reportProblem-text');
  paragraph.textContent = reportProblemDescriptionParagraph;
  
  let description = document.querySelector('.modal__reportProblem-description')
  description.classList.toggle('modal__reportProblem-description_invisible', true)

})
