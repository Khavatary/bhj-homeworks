const poll = document.querySelector(`.poll`)
const pollTitle = document.getElementById(`poll__title`);
const pollAnswers = document.getElementById(`poll__answers`);

let xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://netology-slow-rest.herokuapp.com/poll.php`);
xhr.send();
xhr.addEventListener(`readystatechange`, () => {
  if (xhr.readyState === xhr.DONE) {
    let polling = JSON.parse(xhr.responseText).data;
    pollTitle.textContent = polling.title;
    for (let i = 0; i < polling.answers.length; i++) {
      pollAnswers.insertAdjacentHTML(`beforeEnd`,
        `<button class="poll__answer">
          ${polling.answers[i]}
        </button>`);
    }
  }
});

poll.addEventListener(`click`, (e) => {
  if (e.target.matches(`.poll__answer`)) {
    alert(`Спасибо, ваш голос засчитан!`);
  }
})