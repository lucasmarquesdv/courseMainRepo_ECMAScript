const pessoa = {
 nome: 'Lucas',
 sobrenome: 'Marques'
};

const b = {...a}; //spread

a.nome = 'Joao';
console.log(a);
console.log(b);