// Lógica do menu burger
const menuToggle = document.getElementById('menu_toggle'); // ID correto
const mobileNav = document.querySelector('.menu_box'); // Atualizei a seleção

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active'); // Adiciona ou remove a classe 'active'
    menuToggle.classList.toggle('active'); // Para animar o botão do menu
});

// Lógica da transição da informação
window.addEventListener('scroll', function () {
    const section = document.querySelector('.sec3');
    const divOne = document.querySelector('.divOne');
    const divTwo = document.querySelector('.divTwo');

    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = window.innerHeight * 0.8;

    if (sectionTop < sectionHeight) {
        divOne.classList.add('visible');
        divTwo.classList.add('visible');
    }
});

// Lógica das informações
const infoButtons = document.querySelectorAll('.info-button');
const infoCards = document.querySelectorAll('.info-card');

const showCard = (index) => {
    const isActive = infoCards[index].classList.contains('active');
    infoCards.forEach(card => card.classList.remove('active'));
    if (!isActive) {
        infoCards[index].classList.add('active');
    }
};

infoButtons.forEach((button, index) => {
    button.addEventListener('click', () => showCard(index));
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.info-button') && !e.target.closest('.info-card')) {
        infoCards.forEach(card => card.classList.remove('active'));
    }
});

