const box = document.querySelector(".container");
const img = document.querySelectorAll(".container img");
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active'); 
    menuToggle.classList.toggle('active'); 
});
Width = 600
let contador = 0;
const slider = () => {
    contador++;
    if (contador >= img.length) {
        contador = 0;
    }
    
    const slideWidth = document.querySelector('.carrossel').offsetWidth; 
    box.style.transform = `translateX(${-contador * Width}px)`; 
}


setInterval(slider, 2000);
