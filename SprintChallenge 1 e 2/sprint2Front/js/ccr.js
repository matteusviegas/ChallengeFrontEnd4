/*logica do botao de voltar ao topo */
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



//impedimento da submissao do formulario

document.querySelector('.form-pesquisa').addEventListener('submit', function (event) {
    event.preventDefault();

    const termoPesquisa = document.getElementById('pesquisa').value.toLowerCase();

    // Mapeamento de palavras-chaves 
    const rotas = {
        'projeto': 'html/projeto.html',
        'equipe': 'html/equipe.html',
        'ccr': 'html/ccr.html',
        'home': 'index.html'
    };

    // Navegação para a URL 
    if (rotas[termoPesquisa]) {
        window.location.href = rotas[termoPesquisa];
    } else {
        alert('Página não encontrada. Tente "home", "projeto", "equipe" ou "ccr".');
    }
});



