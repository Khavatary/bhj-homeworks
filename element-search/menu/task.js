 const menuLink = Array.from(document.getElementsByClassName(`menu__link`));

 for (let i = 0; i < menuLink.length; i++) {
   if (menuLink[i].closest(`li`).querySelector(`ul`)) {
     menuLink[i].closest(`li`).querySelector(`a`).addEventListener(`click`, showMenu, false);
   }
 }

 function showMenu(menu) {
   menu.preventDefault();
   this.closest(`li`).querySelector(`ul`).classList.toggle(`menu_active`);
 }