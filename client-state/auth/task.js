const signIn = document.getElementById(`signin`);
const signInform = document.getElementById(`signin__form`);
const welcome = document.getElementById(`welcome`);
const userId = document.getElementById(`user_id`);

function getWelcom() {
    signIn.classList.remove(`signin_active`);
    welcome.classList.add(`welcome_active`);
}

function getForm() {
    if (localStorage.userId) {
        userId.textContent = localStorage.userId;
        getWelcom();
    } else {
        signIn.classList.add(`signin_active`);
    }
}

function submitForm(e) {
    let formData = new FormData(signInform);
    let xhr = new XMLHttpRequest();
    xhr.open(`POST`, `https://students.netoservices.ru/nestjs-backend/auth`);
    xhr.responseType = "json";
    xhr.addEventListener(`readystatechange`,
        function () {
            if (xhr.response.success === true) {
                localStorage.userId = xhr.response.user_id;
                userId.textContent = xhr.response.user_id;
                getWelcom();
            } else {
                alert(`Неверный логин/пароль`);
            }
        }
    );
    xhr.send(formData);
    e.preventDefault();
}

document.addEventListener(`DOMContentLoaded`, getForm);
document.addEventListener(`submit`, submitForm);