const signIn = document.getElementById(`signin`);
const signInform = document.getElementById(`signin__form`);
const welcome = document.getElementById(`welcome`);
const userId = document.getElementById(`user_id`);

function getForm() {
    if (localStorage.userId) {
        userId.textContent = localStorage.userId;
        welcome.classList.add(`welcome_active`);
    } else {
        signIn.classList.add(`signin_active`);
    }
}

function submitForm(e) {
    e.preventDefault();
    let formData = new FormData(signInform);
    let xhr = new XMLHttpRequest();
    xhr.open(`POST`, `https://netology-slow-rest.herokuapp.com/auth.php`);
    xhr.responseType = "json";
    xhr.addEventListener(`readystatechange`,
        function () {
            if (this.readyState == xhr.DONE && this.status == 200) {
                if (xhr.response.success) {
                    localStorage.userId = xhr.response.user_id;
                    userId.textContent = xhr.response.user_id;
                    signIn.classList.remove(`signin_active`);
                    welcome.classList.add(`welcome_active`);
                } else {
                    alert(`Неверный логин/пароль`);
                }
            }
        });
    xhr.send(formData);
}

document.addEventListener(`DOMContentLoaded`, getForm);
document.addEventListener(`submit`, submitForm);