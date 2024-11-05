const box = document.querySelector(".container");
const imgs = document.querySelectorAll(".container img");


/*logica do carrossel*/
let contador = 0;

const mostraSlides = () => {
    box.style.transform = `translateX(${-contador * 100}%)`;
};

const mudaSlide = (n) => {
    contador += n;
    if (contador < 0) {
        contador = imgs.length - 1;
    } else if (contador >= imgs.length) {
        contador = 0;
    }
    mostraSlides();
};




document.getElementById('prev').addEventListener('click', () => mudaSlide(-1));
document.getElementById('next').addEventListener('click', () => mudaSlide(1));

document.getElementById('suggestionForm').addEventListener('submit', function(event) {
    event.preventDefault();
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

/*logica email*/

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

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

