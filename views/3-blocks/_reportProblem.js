const reportProblemButton = document.querySelector('.reportProblem__button')
let isReportButtonAlreadyclickedBefore = false;

reportProblemButton.addEventListener('click', (event) => {
  //event.preventDefault()
  
  const reportData = {
    type:'report-without-description',
    languageCode: datalayer.language.code,
    countryCode: datalayer.country.code,
    serviceNameHyphen: datalayer.service.nameHyphen,
    cityAasciiNameHyphen: datalayer.city.asciiNameHyphen,
    description: null,
  }

  const currentURL = window.location.href

  const url = `${currentURL}/report-problem`

  if (!isReportButtonAlreadyclickedBefore) {
    fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportData)
    })
  }
  
  isReportButtonAlreadyclickedBefore = true
})
