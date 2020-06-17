const acc = document.getElementsByClassName('faq__accordion')
const accHeader = document.getElementsByClassName('faq__accordion-header-text')

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    accHeader[i].classList.toggle('faq__accordion-header-text_open')

    const panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}
