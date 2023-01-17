const navMenuBTN = document.querySelector('.nav-menu-btn');
const navUL = document.querySelector('.navigation');

navMenuBTN.addEventListener('click', () => {
    navUL.classList.toggle('show');
})
