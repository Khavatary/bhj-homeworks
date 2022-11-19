const viewPort = window.innerHeight;
const arrReveal = Array.from(document.querySelectorAll(`.reveal`));

let showReveal = () => {
  for (let i = 0; i < arrReveal.length; i++) {
    let eReveal = arrReveal[i].getBoundingClientRect().top;
    if (eReveal < viewPort) {
      arrReveal[i].classList.add(`reveal_active`);
    }
  }
}

window.addEventListener(`scroll`, showReveal);