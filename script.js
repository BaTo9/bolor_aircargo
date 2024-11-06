// Go to top button
const gotopBtn = document.querySelector('.gotopbtn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 200) {
        gotopBtn.classList.add('active')
    } else {
        gotopBtn.classList.remove('active')
    }
}

gotopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// menu
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".menu li a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
