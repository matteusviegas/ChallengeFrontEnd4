// Lógica do menu burger
const menuToggle = document.getElementById('menu_toggle'); 
const mobileNav = document.querySelector('.menu_box');
menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active'); 
    menuToggle.classList.toggle('active'); 
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


/*efeito do botao*/
infoButtons.forEach((button, index) => {
    button.addEventListener('click', () => showCard(index));
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.info-button') && !e.target.closest('.info-card')) {
        infoCards.forEach(card => card.classList.remove('active'));
    }
});


const scrollToTopButton = document.getElementById("scrollToTop");


window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};


scrollToTopButton.onclick = function () {
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};


// Lógica da transição da informação
window.addEventListener('scroll', function () {
    const section = document.querySelector('.sec2');
    const linhas = document.querySelectorAll('.linha');

    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = window.innerHeight * 0.3;

    if (sectionTop < sectionHeight) {
        linhas.forEach(linha => {
            linha.classList.add('visible'); 
        });
    }
});




/*logica das listas*/


const linhas = document.querySelectorAll('.linha');

function mostrarLinhas() {
    linhas.forEach(linha => {
        if (linha.getBoundingClientRect().top < window.innerHeight) {
            linha.classList.add('show');
        }
    });
}

window.onscroll = mostrarLinhas;
mostrarLinhas();




document.querySelector('.form-pesquisa').addEventListener('submit', function (event) {
    event.preventDefault();  // Evita a submissão padrão do formulário
    
    const termoPesquisa = document.getElementById('pesquisa').value.toLowerCase();
    
    // Mapeamento de palavras-chave para URLs
    const rotas = {
        'projeto': 'html/projeto.html',
        'equipe': 'html/equipe.html',
        'ccr': 'html/ccr.html',
        'home': 'index.html'
    };
    
    // Navegação para a URL correspondente à palavra-chave
    if (rotas[termoPesquisa]) {
        window.location.href = rotas[termoPesquisa];
    } else {
        alert('Página não encontrada. Tente "home", "projeto", "equipe" ou "ccr".');
    }
});

