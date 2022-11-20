const arrCheck = Array.from(document.querySelectorAll(`.interest__check`));

arrCheck.forEach(el => {
  const parentCheck = el.closest(`li.interest`);
  const arrInterest = Array.from(parentCheck.querySelectorAll(`.interest__check`));
  const ulCheck = parentCheck.querySelector(`.interests`);

  if (ulCheck) {
    el.addEventListener(`change`, () => {
      for (let i = 0; i < arrInterest.length; i++) {
        (el.checked) ? arrInterest[i].checked = true: arrInterest[i].checked = false;
      }
    });
  }
})