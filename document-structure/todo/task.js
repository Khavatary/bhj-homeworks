const inputText = document.getElementById(`task__input`);
const tasks = document.getElementById(`tasks__list`);
const form = document.getElementById(`tasks__form`);

form.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (inputText.value.length) {
    tasks.insertAdjacentHTML(`beforeEnd`, `
      <div class="task">
      <div class="task__title">
        ${inputText.value} 
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`);
  }
  inputText.value = ``;
})

tasks.addEventListener(`click`, (e) => {
  (e.target.matches(`.task__remove`)) ? e.target.closest(`.task`).remove(): false;
})