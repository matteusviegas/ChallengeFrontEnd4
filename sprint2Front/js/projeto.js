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




function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById('suggestionForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const suggestion = document.getElementById('suggestion').value;

    let isValid = true;

    if (!validateName(name)) {
        document.getElementById('nameError').innerText = "O nome não pode ter números.";
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = "";
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = "Por favor, insira um email válido.";
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    if (suggestion.trim() === "") {
        document.getElementById('suggestionError').innerText = "A sugestão não pode estar vazia.";
        isValid = false;
    } else {
        document.getElementById('suggestionError').innerText = "";
    }

    if (isValid) {
        document.getElementById('successMessage').style.display = "block";
        document.getElementById('suggestionForm').reset();
    }
});


/*logica do botao voltar ao topo*/

const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


