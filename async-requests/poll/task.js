/* const poll = document.getElementsByClassName(`poll`)
const pollTitle = document.getElementById(`poll__title`);
const pollAnswers = document.getElementById(`poll__answers`);

let xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://netology-slow-rest.herokuapp.com/poll.php`);
xhr.send();
xhr.addEventListener(`readystatechange`,() => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove(`loader_active`);
    let valute = JSON.parse(xhr.response).response.Valute;
    for (let value in valute) {
      items.insertAdjacentHTML(`beforeEnd`, `
       <div class="item">
         <div class="item__code">
         ${valute[value].CharCode}
         </div>
         <div class="item__value">
         ${valute[value].Value}
         </div>
         <div class="item__currency">
         руб.
         </div>
      </div>`);
    }
  }
}) */


const items = document.getElementById(`items`);
const loader = document.getElementById(`loader`);

let xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://netology-slow-rest.herokuapp.com`);
xhr.send();
xhr.addEventListener(`readystatechange`, () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove(`loader_active`);
    let valute = JSON.parse(xhr.response).response.Valute;
    for (let value in valute) {
      items.insertAdjacentHTML(`beforeEnd`, `
       <div class="item">
         <div class="item__code">
         ${valute[value].CharCode}
         </div>
         <div class="item__value">
         ${valute[value].Value}
         </div>
         <div class="item__currency">
         руб.
         </div>
      </div>`);
    }
  };
});