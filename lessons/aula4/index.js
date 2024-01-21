let num1 = 9.54789;
let num2 = Math.floor(num1); //Arredonda para baixo

console.log(num2);

let num3 = 9.54989;
let num4 = Math.ceil(num3); //Arredonda para cima

console.log(num4);


let num5 = 9.548798;
let num6 = Math.round(num5); //Arredonda automaticamente o número.

console.log(num6);

console.log(Math.max()); //Uma sequencia de número, ele retorna o maior.
console.log(Math.min()); //Uma sequencia de número, ele retorna o menor;

console.log(Math.random()); //Retorna números aleatórios.

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //Comanda os números aleatórios ficar entre 5 e 10.

console.log(`O número aleatório que você veio para você foi: ${aleatorio}`);

console.log(Math.PI); //Valor de PI.
console.log(Math.pow(2, 10)); // 2 ** 10, mesmo resultado.

let numeroIdea = 9;
console.log(numeroIdea ** (1/2)); //Raiz quadrada.
