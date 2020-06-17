const reportProblemButton = document.querySelector('.reportProblem__button')
let isReportButtonAlreadyclickedBefore = false;

reportProblemButton.addEventListener('click', (event) => {
  event.preventDefault()
  
  const reportData = {
    type:'report-without-description',
    languageCode: datalayer.language.code,
    countryCode: datalayer.country.code,
    nameHyphen: datalayer.service.nameHyphen,
    cityName: datalayer.city.asciiNameHyphen,
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
