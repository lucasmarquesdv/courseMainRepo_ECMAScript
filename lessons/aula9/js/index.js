// Valores primitivos e valores por referência.
/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

*/
//          01234
let nome = 'Lucas';
nome = 'Marques';
console.log(nome);

/*
Referência (mutável) - arrays, object, function
*/

let a = [1, 2, 3];
let b = [...a]; // b linka para o mesmo local que a aponta na memória.
let c = b;

console.log(a, b);

a.push('Marques');
console.log(a);

b.pop();
console.log(a, b);