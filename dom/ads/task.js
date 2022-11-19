const arrRotator = Array.from(document.querySelectorAll(`.rotator__case`));
let arrLength = arrRotator.length - 1;
let i = 0;

setInterval(() => {
  arrRotator[i].classList.remove(`rotator__case_active`);
  if (i == arrLength) {
    i = 0;
    arrRotator[i].classList.add(`rotator__case_active`);
  } else {
    i++;
    arrRotator[i].classList.add(`rotator__case_active`);
  }
}, 1000);