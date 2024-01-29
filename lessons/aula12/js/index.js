/*
Operadores lógicos
&& -> AND -> E -> todas as expressões precisam ser verdadeiras para retornar verdadeiro/true
| | -> OR -> OU //essas barras para cima se chamam pipe
! -> NOT -> NÃO
*/
console.log(true && true);

const expressaoAnd = true && true && true;
const expressaoOr = false || false || false;

const user = 'Lucas '; //form username usuário digitou
const password = '123456'; //form user password usuário digitou

const vaiLogar = user === 'Lucas' && password === '123456';
console.log(vaiLogar);

//Operador NOT

console.log(!true); //o ! faz com que true vire ao contrário e transforme em false. Se você colocasse um valor false ali, retornaria true.

console.log(!!true); //ele negará uma vez o true, o true passa a ser falso. Se ele negar a outra vez, o true passa a ser true novamente.