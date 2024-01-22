// Array - lista de coisas
const alunos = ['Luiz', 'Maria', 'Joao', 'Lucas'];

// const removido = alunos.pop() //Estourando/removendo o elemento no final da array. O const armazena o elemento removido. Se der um console.log verá o nome do João.
const removidoTwo = alunos.shift(); //Estoura/remove o elemento do começo da array. O const armazena o elemento removido.

alunos[4] = 'Simone'; // Adicionando 
alunos[0] = 'Denis'; // Altera

// delete alunos[] - Utilize para deletar elementos da array. Os índices vão ficar vazios e indefinidos.

// console.log(alunos);
// console.log(alunos.lenght);
// console.log(alunos[3]);

alunos.push('Otávio'); // Adiciona no fim
alunos.unshift('Caramelo'); // Adiciona no começo

console.log(alunos);
console.log(typeof alunos);
console.log(alunos instanceof Array);