/*logica do formulario*/

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
        document.getElementById('nameError').innerText = "O nome não pode conter números.";
        document.getElementById('nameError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = "none";
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = "Por favor, insira um email válido.";
        document.getElementById('emailError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = "none";
    }

    if (suggestion.trim() === "") {
        document.getElementById('suggestionError').innerText = "A sugestão não pode estar vazia.";
        document.getElementById('suggestionError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('suggestionError').style.display = "none";
    }

    if (isValid) {
       
        alert("Sugestão enviada com sucesso!");
        document.getElementById('suggestionForm').reset();
    }
});



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


