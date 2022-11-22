const arrControls = Array.from(document.querySelectorAll(`.product__quantity-controls`));
const arrProduct = Array.from(document.querySelectorAll('.product'));
const products = document.querySelector('.cart__products');

for (let i = 0; i < arrControls.length; i++) {
  arrControls[i].addEventListener(`click`, (event) => {
    const value = arrControls[i].querySelector(`.product__quantity-value`);

    if (event.target.matches(`.product__quantity-control_dec`)) {
      if (value.textContent == 1) {
        return;
      }
      value.textContent--;
    } else if (event.target.matches(`.product__quantity-control_inc`)) {
      value.textContent++;
    }
    return value.textContent;
  })
}

for (let i = 0; i < arrProduct.length; i++) {
  arrProduct[i].addEventListener(`click`, (e) => {
    const basket = Array.from(document.querySelectorAll(`.cart__product`));
    const id = arrProduct[i].dataset.id;
    const value = Number(arrProduct[i].querySelector(`.product__quantity-value`).textContent);
    const image = arrProduct[i].querySelector(`.product__image`).getAttribute(`src`);
    const same = basket.find((e) => {
      return e.dataset.id === id;
    })

    if (same) {
      if (e.target.matches(`.product__add`)) {
        const valueAdd = Number(same.querySelector(`.cart__product-count`).textContent);
        same.querySelector(`.cart__product-count`).textContent = valueAdd + value;
      }
    } else {
      if (e.target.matches(`.product__add`)) {
        products.insertAdjacentHTML(`beforeEnd`,
          `<div class="cart__product" data-id="${id}">
        <img class="cart__product-image" src="${image}">
        <div class="cart__product-count">${value}</div>
    </div>`);
      }
    }
  })
}