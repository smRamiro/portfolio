// Select DOM items
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.btn-nav');
const menuBtn = document.querySelector('.btn-menu');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item')

// Set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBranding.classList.add('show')

        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.add('show');
        }

        showMenu = true;
    }else{
        menuBtn.classList.add('close')
        menuBtn.classList.add('close')

        showMenu = false;
    }
}