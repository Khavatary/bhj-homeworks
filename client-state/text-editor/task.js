const editor = document.getElementById(`editor`);

editor.oninput = function () {
  localStorage.text = editor.value;
}

document.addEventListener(`DOMContentLoaded`, () =>{
  editor.value = localStorage.text;
})  