const editor = document.getElementById(`editor`);

editor.oninput = function () {

  localStorage.text = editor.value;
}

document.addEventListener(`DOMContentLoaded`, () => {
  if (localStorage.text === undefined) {
    editor.value = ``;
  } else {
    editor.value = localStorage.text;
  }
})