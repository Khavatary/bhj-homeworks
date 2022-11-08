const dropValue = document.querySelector(`.dropdown__value`);
const linkArr = Array.from(document.querySelectorAll(`.dropdown__link`));

dropValue.addEventListener(`click`, changeMenu);

function changeMenu() {
  let list = document.querySelector(`.dropdown__list`);
  let activ = `dropdown__list_active`;
  list.classList.contains(activ) ? list.classList.remove(activ) : list.classList.add(activ);
};

for (let i = 0; i < linkArr.length; i++) {
  linkArr[i].onclick = function () {
    dropValue.textContent = linkArr[i].textContent;
    return false;
  }
  linkArr[i].addEventListener(`click`, changeMenu);
}