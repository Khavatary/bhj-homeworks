const arrFont = Array.from(document.querySelectorAll(`.font-size`));
const book = document.getElementById(`book`);

for (let i = 0; i < arrFont.length; i++) {
  arrFont[i].onclick = function () {
    if (arrFont[i].classList.contains(`font-size_small`)) {
      book.classList.add(`book_fs-small`);
      book.classList.remove(`book_fs-big`);
    } else if (arrFont[i].classList.contains(`font-size_big`)) {
      book.classList.add(`book_fs-big`);
      book.classList.remove(`book_fs-small`);
    } else {
      book.classList.remove(`book_fs-big`, `book_fs-small`);
    }
    book.querySelector(`.font-size_active`).classList.remove(`font-size_active`);
    arrFont[i].classList.add(`font-size_active`);
    return false;
  }
}