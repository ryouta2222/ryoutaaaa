let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    console.log("Menu icon clicked");
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};


const typed = new Typed('.multiple-text', {
    strings: ['Aspiring Web Developer', 'Information and Technology Student', 'Chill Guy'],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1200,
    loop: true,
  });