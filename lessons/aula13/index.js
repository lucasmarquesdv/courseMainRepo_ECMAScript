//Avaliação de curto-circuito

/**
 * Operadores lógicos
 * && = and -> false && true -> false "o valor mesmo"
 * ||= or -> true && false -> vai retornar "o valor verdadeiro"
 * ! = not
 
FALSY
 * false
0
'' "" ``
null / undefined
NaN
 */

console.log('Lucas' && undefined && 'Maria');


function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
