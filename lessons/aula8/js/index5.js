const pessoa1 = {
    nome: 'Lucas', sobrenome: 'Marques', idade: 19,
    
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi!. A minha idade atual é ${this.idade}`) // A palavra this quer dizer pessoa1 nesse contexto objeto. Ou seja, o this está pegando o valor de nome, sobrenome e idade e referindo a ele.
    },

    incrementaIdade() {
        ++this.idade;
    },

};

pessoa1.fala(); // Executa a function fala, obtendo consigo pessoa1.
pessoa1.incrementaIdade();
pessoa1.fala();