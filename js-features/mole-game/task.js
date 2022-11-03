const kill = document.getElementById(`dead`);
const miss = document.getElementById(`lost`);

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

getNull = () => {
  kill.textContent = 0, miss.textContent = 0
};

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = function () {
    if (getHole(i).className.includes('hole_has-mole')) {
      kill.textContent++;
    } else {
      miss.textContent++;
    }
    if (kill.textContent == 10) {
      alert(`Победа!`);
      getNull();
    }
    if (miss.textContent == 5) {
      alert(`Проигрыш!`);
      getNull();
    }
  }
}