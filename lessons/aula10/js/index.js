// Exercícios sobre funções, arrays e objetos.

function meuEscopo() {
    const form = document.querySelector('.form'); //seletor do formulário.
    
    form.onsubmit = function (evento) {
        evento.preventDefault(); //previne que a página atualize sozinha.
        alert(1);
    };
}

meuEscopo();