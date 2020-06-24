$(document).ready(()=>{
    $('.c-hamburger').click(()=>{
        $('.c-hamburger').toggleClass('c-hamburger__change');
    });
});
$('.gallery-list-item').click(function(){
    let value = $(this).attr('data-filter');
    if(value === 'all'){
        $('.filter').show(300);
    }else{
        $('.filter').not('.'+value).hide(300);
        $('.filter').filter('.'+value).show(300);
    }
});
$('.gallery-list-item').click(function(){
    $(this).addClass('t-works__active-item').siblings().removeClass('t-works__active-item');
});
$(document).ready(()=>{
    $('.collapse').click(()=>{

        $('.collapse').toggleClass('t-creativity__arrow');

    });
});



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');


showError = (input, message) =>{
    const formControl = input.parentElement;
    formControl.className = 'form-group w-75 mx-auto error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

showSuccess = (input) =>{
    const formControl = input.parentElement;
    formControl.className = 'form-group w-75 mx-auto success';
}
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('click', (e)=>{
    e.preventDefault();

    if(username.value === ''){
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email, 'Email is required');
    } else if(!validateEmail(email.value)){
        showError(email, 'Email is not valid');
    }
    else {
        showSuccess(email);
    }

});