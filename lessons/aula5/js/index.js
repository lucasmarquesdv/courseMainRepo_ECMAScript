// Exercícios sobre numbers e Math
const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo'); //Note o CamelCase. Quero obter um elemento por id = método
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; //Ao utilizar o body, você estará selecionando o HTML inteiro. Nesse método acima eu apenas selecionei o elemento por id e atribuí o número ao numeroTitulo, que armazena meu id.

texto.innerHTML = '';

texto.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;