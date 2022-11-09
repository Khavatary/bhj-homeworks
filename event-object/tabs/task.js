const tab = Array.from(document.querySelectorAll(`.tab`));
const tabCont = Array.from(document.querySelectorAll(`.tab__content`));
let startI = 0;

for (let i = 0; i < tab.length; i++) {
  tab[i].onclick = function () {
    tab[startI].classList.remove(`tab_active`);
    tabCont[startI].classList.remove(`tab__content_active`);
    tab[i].classList.add(`tab_active`);
    tabCont[i].classList.add(`tab__content_active`);
    startI = i;
  }
}