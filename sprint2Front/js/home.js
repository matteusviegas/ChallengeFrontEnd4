//o plano daqui é mecher com os botoes, para aparecer no meio da tela para detalhar, como realmente um aviso msm, cheio de img,h1, e  "p"


const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active'); // Adiciona ou remove a classe 'active'
    menuToggle.classList.toggle('active'); // Para animar o botão do menu
});

