const box = document.querySelector(".container");
const imgs = document.querySelectorAll(".container img");

let contador = 0;

const mostraSlides = () => {
    // Aplica a transformação
    box.style.transform = `translateX(${-contador * 100}%)`;
};

const mudaSlide = (n) => {
    contador += n;

    // Verifica os limites
    if (contador < 0) {
        contador = imgs.length - 1; // Vai para a última imagem
    } else if (contador >= imgs.length) {
        contador = 0; // Volta para a primeira imagem
    }

    mostraSlides(); // Atualiza a exibição
};

document.getElementById('suggestionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Limpar mensagens de erro anteriores
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('suggestionError').textContent = '';

 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const suggestion = document.getElementById('suggestion').value.trim();

    let valid = true;

    
    if (name === '') {
        document.getElementById('nameError').textContent = 'Nome é obrigatório.';
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'E-mail é obrigatório.';
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'E-mail inválido.';
        valid = false;
    }


    if (suggestion === '') {
        document.getElementById('suggestionError').textContent = 'Sugestão é obrigatória.';
        valid = false;
    }

  
    if (valid) {
        alert(`Obrigado, ${name}! Sua sugestão foi enviada.`);
        this.reset(); 
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
