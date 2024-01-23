function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(5, 5));
console.log(soma(5, 10));
console.log(soma());

// A engine do JavaScript não lê comandos abaixo do return em funções.

// O sinal = dentro dos parâmetros serve para se caso eu não atribuir nenhum número ou nenhum dado para x e para y, o x e y já se inicia com um número determinado. Neste caso, determinei que ele começasse com 1. Este caso só é utilizado se caso eu não atribuir nenhum valor!