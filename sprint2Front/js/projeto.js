const box = document.querySelector(".container");
const img = document.querySelectorAll(".container img");
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active'); // Adiciona ou remove a classe 'active'
    menuToggle.classList.toggle('active'); // Para animar o botão do menu
});
Width = 600
let contador = 0;
const slider = () => {
    contador++;
    if (contador >= img.length) {
        contador = 0;
    }
    // Calcule a largura do carrossel
    const slideWidth = document.querySelector('.carrossel').offsetWidth; // largura do carrossel
    box.style.transform = `translateX(${-contador * Width}px)`; // Usar a largura do carrossel
}

// Execute o slider a cada 2 segundos
setInterval(slider, 2000);
