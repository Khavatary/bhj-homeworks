const modalMain = document.getElementById(`subscribe-modal`);
const modalClose = document.querySelector(`.modal__close`);

function getActive() {
  let stat = getCookie(`modalActive`);
  if ((stat === false || stat === undefined)) {
    modalMain.classList.add(`modal_active`);
  }
}

function getClose() {
  modalMain.classList.remove(`modal_active`);
  document.cookie = `modalActive=True`;
}

/* function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
} */

function getCookie (name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
      return parts.pop().split(";").shift();
  }
}

document.addEventListener(`DOMContentLoaded`, getActive);
modalClose.addEventListener(`click`, getClose);



