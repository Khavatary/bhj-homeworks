const modalMain = document.getElementById(`modal_main`);
const modalClose = Array.from(document.getElementsByClassName('modal__close'));
const modalSuccess = document.getElementById('modal_success');
const onBtn = document.querySelector('a.btn_danger')

modalMain.classList.add(`modal_active`);

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function () {
    this.closest('div.modal').classList.remove('modal_active');
  }
}

onBtn.onclick = function () {
  modalMain.classList.remove(`modal_active`);
  modalSuccess.classList.add(`modal_active`);
}