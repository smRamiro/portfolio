// Select DOM items
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBtn = document.querySelector('.menu-btn');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item')

// Set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBtn.classList.add('close')
        menuBranding.classList.add('show')
        navItems.forEach(item => item.classList.add('show'))

        showMenu = true;
    }else{
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBtn.classList.remove('close')
        menuBranding.classList.remove('show')
        navItems.forEach(item => item.classList.remove('show'))

        showMenu = false;
    }
}