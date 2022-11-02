const cake = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

cake.onclick = function () {
  if (counter.textContent % 2) {
    cake.width = 200;
  } else {
    cake.width = 250;
  }
  counter.textContent++;
}