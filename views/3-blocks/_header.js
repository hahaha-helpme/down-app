// is it better to use something like this?
import templateData from '../0-views/service/pug.config.js'
const dataLayer = templateData.locals.viewLocals.body.datalayer;

function getMarkColor(status) {

  if (status === 0) {
    return "header__mark_green";
  } else if (status === 0.5) {
    return "header__mark_orange";
  } else if (status === 1) {
    return "header__mark_red";
  }

}

function setMarkColor(color) {
  document.querySelector(".header__mark").classList.toggle(getMarkColor(color));
}

setMarkColor(datalayer.service.status);

 
//           createHeaderText: function() {
//             let headerText = "";
//             for (let [key, value] of Object.entries(this.text)) {
//               if (key === "marked") {
//                 headerText = headerText.concat(" ", "<mark class=\"header__mark\">" + value + "</mark>");
//               } else {
//                 headerText = headerText.concat(" ", value);
//               }
//             }
//             return headerText;
//           }
