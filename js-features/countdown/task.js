const element = document.getElementById("timer");

function countDown() {
  element.textContent -= 1;
  if (element.textContent == 0) {
    alert('Вы победили в конкурсе');
    clearInterval(counter);
  }
}

let counter = setInterval(countDown, 1000);