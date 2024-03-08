'use strict';

const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('burger-menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});

menuClose.addEventListener('click', function() {
    menu.classList.remove('active');
});