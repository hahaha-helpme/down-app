const ctx = document.getElementById('downChart').getContext('2d')
let timeReportsSequence = datalayer.serviceView.downChart.timeReportsSequence

// sequence to localtime en split to arrays
const localesOptions = {
  hour: '2-digit', 
  minute: '2-digit',
};  

const locales = {
    languageCode: datalayer.language.code,
    countryCode: datalayer.country.code,
}

let timeLabels = [];
let sequenceOfReports = [];
timeReportsSequence.forEach(date => {
  let count = date.count;
  sequenceOfReports.push(count)
  let time = new Date(date.time).toLocaleTimeString(`${locales.languageCode}-${locales.countryCode}`, localesOptions)
  timeLabels.push(time)
})


const data = {
  labels: timeLabels,
  datasets: [{
    data: sequenceOfReports,
    backgroundColor: null,
    borderColor: null,
    pointRadius: 0,
    borderWidth: 3
  }]
}

const tooltipLabel = datalayer.serviceView.downChart.tooltipLabel

const options = {

  defaultFontFamily: Chart.defaults.global.defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif',

  responsive: true,
  aspectRatio: null,

  tooltips: {
    mode: 'nearest',
    intersect: false,
    callbacks: {
          label: function(tooltipItems, data) { 
              return tooltipItems.yLabel + ' ' + tooltipLabel;
          }
      }
  },

  legend: {
    display: false
  },

  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        display: false
      },
      ticks: {
        reverse:true,
        lineHeight: 2.5,
      },
    }],
    yAxes: [{
      display: true,
      gridLines: {
        display: false
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 50 //avgOfnumberOfReports*4
      }
    }]
  }
}

const chart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
  plugins: [{
    id: 'defineDownChartValues',

    afterLayout: function (chart) {
      
      const currentStatus = datalayer.service.status;
      
      (function setAspectRatio () {
        const windowWidthInEm = window.innerWidth / parseFloat(getComputedStyle(document.querySelector('body'))['font-size'])
        const aspectRatioNum = 0.725 + (windowWidthInEm * (1 / 55))

        chart.aspectRatio = Math.min(2.25, Math.max(1, aspectRatioNum.toFixed(2)))
      })()

      function getBorderColor (status) {
        if (status < 0.5) {
          return 'rgba(0, 181, 63, 1)'
        } else if (status >= 0.5 && status <= 0.7) {
          return 'rgba(255, 102, 0, 1)'
        } else if (status >= 0.7) {
          return 'rgba(242,68,68, 1)'
        }
      }

      function setborderColor (chart, status) {
        chart.data.datasets[0].borderColor = getBorderColor(status)
      }

      setborderColor(chart, currentStatus)

      function getGradientColor (status) {
        if (status < 0.5) {
          return ['rgba(0, 181, 63, 0.01)', 'rgba(0, 181, 63, 0.6)']
        } else if (status >= 0.5 && status <= 0.7) {
          return ['rgba(255, 102, 0, 0.01)', 'rgba(255, 102, 0, 0.6)']
        } else if (status >= 0.7) {
          return ['rgba(242,68,68, 0.01)', 'rgba(242,68,68, 0.6)']
        }
      }

      function setGradient (chart, status) {
        const scales = chart.scales
        const color = chart.ctx.createLinearGradient(0, scales['x-axis-0'].top, 0, 0)
        const chartColors = getGradientColor(status)

        color.addColorStop(0, chartColors[0])
        color.addColorStop(1, chartColors[1])

        chart.data.datasets[0].backgroundColor = color
      }

      setGradient(chart, currentStatus)
    }
  }]
})
