let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#close-form');
let navbar = document.querySelector('.');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}


searchBtn.addEventListener('click',() =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})


searchBtn.addEventListener('click',() =>{
    searchBtn.classList. toggle('fa-times');   
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',() =>{   
    loginForm.classList.add('active');
});

formClose.addEventListener('click',() =>{   
    loginForm.classList.remove ('active');
});


// Help me to solve this problem of the code
// I am trying to make a responsive navbar but it is not working properly
// I am trying to make a review section but it is not working properly
// Javascript go de refuse to work