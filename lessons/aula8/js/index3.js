function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Lucas', 'Marques', 19);
const pessoa3 = criaPessoa('Silvia', 'Santos', 45);
const pessoa4 = criaPessoa('Valquiria', 'das Galáxias', 28);
const pessoa5 = criaPessoa('Mário', 'Bross', 55);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

console.log(pessoa1.sobrenome, pessoa2.sobrenome, pessoa3.sobrenome, pessoa4.sobrenome, pessoa5.sobrenome);

console.log(pessoa1.idade, pessoa2.idade, pessoa3.idade, pessoa4.idade, pessoa5.idade);