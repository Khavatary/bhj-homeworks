'use strict'

const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const user = document.getElementById('user_id');

signin.classList.add('signin_active');

let xhr  = new XMLHttpRequest();

// signinForm.addEventListener('submit', (event) => {    

//     signinBtn.addEventListener('click', (e) => {
//         const formData = new FormData(signinForm);
//         let xhr  = new XMLHttpRequest();
//         xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    
//         xhr.send(formData);
//         e.preventDefault();
//     })
//     event.preventDefault();       
// });

signinForm.addEventListener('submit', send);
signinBtn.addEventListener('click', send);    
function send(e) {
    const formData = new FormData(signinForm);
    
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = 'json';
    xhr.send(formData);

    e.preventDefault();           
}

xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                
        if (xhr.response.success) {
            let userId = xhr.response.user_id;
            localStorage.user = `${userId}`;
            welcome.classList.add('welcome_active');
            user.textContent = `${userId}`;

            signin.classList.remove('signin_active');
        } else {
            alert('Неверный логин/пароль');   
        }        
    } 
//     else if (xhr.status !== 200) {
//         alert('Ошибка загрузки данных');    
//     }
}

if (localStorage.user) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    user.textContent = `${localStorage.user}`;
}