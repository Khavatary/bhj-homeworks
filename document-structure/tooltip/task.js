const arrTooltip = Array.from(document.querySelectorAll(`.has-tooltip`));
const tooltip = document.querySelector(`.tooltip`);

for (let i = 0; i < arrTooltip.length; i++) {
  arrTooltip[i].insertAdjacentHTML(`afterend`, `<div class="tooltip"></div>`);
  arrTooltip[i].onclick = function () {
    arrTooltip[i].nextElementSibling.classList.toggle(`tooltip_active`);
    arrTooltip[i].nextElementSibling.textContent = arrTooltip[i].title;
    arrTooltip[i].nextElementSibling.style.top = `${arrTooltip[i].getBoundingClientRect().bottom}px`;
    arrTooltip[i].nextElementSibling.style.left = `${arrTooltip[i].getBoundingClientRect().left}px`;
    return false;
  }
}