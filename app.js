const sidemenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
// const darkToggle = document.getElementById('darkToggle');


function openMenu() {
    sidemenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sidemenu.style.transform = 'translateX(16rem)';
}
window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm');
    }
    else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm');
    }
})



// darkToggle.addEventListener('click', () => {
//     document.documentElement.classList.toggle('dark');
// });