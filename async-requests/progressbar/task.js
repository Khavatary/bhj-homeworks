const form = document.getElementById(`form`);
const progress = document.getElementById(`progress`);

form.onsubmit = (e) => {
    let formData = new FormData(form);
    let xhr  = new XMLHttpRequest();
    xhr.open(`POST`, `https://netology-slow-rest.herokuapp.com/upload.php`);
    xhr.upload.onprogress = (e) => {        
        progress.value = e.loaded / e.total;
    }   
    xhr.send(formData);
    e.preventDefault();    
};