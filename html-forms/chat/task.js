const side = document.querySelector(`.chat-widget`);
const messages = document.getElementById(`chat-widget__messages`);
const messageInput = document.getElementById(`chat-widget__input`);
let time = new Date().toLocaleTimeString(`ru-RU`, {
  hour: `2-digit`,
  minute: `2-digit`
});
let i = 0;

side.addEventListener(`click`, () => {
  side.classList.add(`chat-widget_active`)
})

let arrMessages = [
  `Вы не купили ниодного товара, что бы с нами так разговаривать!`,
  `Кто тут?`,
  `Где ваша совесть?`,
  `Мы ничего не будем вм продавать!`,
  `Добрый день! Досвидания!`,
  `К сожалению все операторы сейчас заняты, не пишите нам больше!`
];

function getMessage(e) {
  if (e.code === `Enter`) {
    if (this.value != ``) {
      messages.innerHTML += `        
            <div class="message message_client">
              <div class="message__time">${time}</div>
              <div class="message__text">${this.value}</div>
            </div>
            <div class="message">
              <div class="message__time">${time}</div>
              <div class="message__text">${arrMessages[i]}</div>
            </div>`;
      (i == arrMessages.length - 1) ? i = 0: i++;
      this.value = ``;
    }
  }
}

messageInput.addEventListener('keydown', getMessage);