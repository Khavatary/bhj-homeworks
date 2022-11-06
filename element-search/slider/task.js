const btnLeft = document.querySelector(`.slider__arrow_next`);
const btnRight = document.querySelector(`.slider__arrow_prev`);
const sliderItemArr = Array.from(document.getElementsByClassName(`slider__item`));

function searchActive(index) {
  if (index.className === `slider__item slider__item_active`) {
    return index;
  }
}

btnLeft.onclick = function getNext() {
  let startSlide = sliderItemArr.findIndex(searchActive);
  sliderItemArr[startSlide].classList.remove(`slider__item_active`);
  let nextIndex = startSlide === sliderItemArr.length - 1 ? 0 : startSlide + 1;
  sliderItemArr[nextIndex].classList.add(`slider__item_active`);
}

btnRight.onclick = function getPrev() {
  let startSlide = sliderItemArr.findIndex(searchActive);
  sliderItemArr[startSlide].classList.remove(`slider__item_active`);
  let nextIndex = startSlide === 0 ? sliderItemArr.length - 1 : startSlide - 1;
  sliderItemArr[nextIndex].classList.add(`slider__item_active`);
}