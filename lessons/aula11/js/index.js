// lógica de programação em JavaScript

/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (= atribuição) (valor)
=== igualdade estrita (valor e tipo) (mais recomendado)
!= diferente (valor)
!=== diferente estrito (valor e tipo) (mais recomendado)
 */
const comp = 10 > 5; 
console.log(comp);

const comp1 = 10 >= 11; //o dez fica true até chegar no valor dele mesmo, se o valor for maior que dez, já não será mais true, porque dez não é mais maior ou igual à determinado número.
console.log(comp1);

const comp2 = 10 <= 11; //nesse caso o comp2 vai retornar true, porque dez é menor que onze, mas ele não vai identificar o operador de igual e por isso ele vai retornar true direto
console.log(comp2);

const comp3 = 12 <= 11; //neste caso o comp3 vai retornar false, porque o número doze já é maior que o número onze.
console.log(comp3);

// criar variáveis separadas
const num1 = 10;
const num2 = 11;
const compara = num1 < num2;
console.log(compara); //nesse caso estamos fazendo igual acima, porém colocando os números da direita e da esquerda dentro de variáveis


const igual1 = 10; //NUMBER
const igual2 = '10';//STRING //quando o tipo de dado é igual ele vai fazer o comparativo igual com o tipo de número que você forneceu. Caso você coloque por exemplo uma string, ele já não vai conseguir fazer o comparativo porque o tipo de dado é diferente. ESSE JEITO DE FAZER NÃO É UM JEITO RECOMENDADO
const compNum = num1 == num2;
console.log(compNum);
// DIFERENTE DO JEITO ACIMA, SEGUE O MELHOR MODO
const numIgual1 = 10;
const numIgual2 = 10;
const comparativeNum = numIgual1 === numIgual2;
console.log(comparativeNum); //nesse caso ele vai retornar true porque o tipo de dado é o mesmo. Mas se caso você fosse converter o número dez para um tipo de dado string ele já retornaria false

// diferente e diferente estrito

const numberOne = 10;
const numberTwo = 10;
const comparativeNumber = numberOne != numberTwo;
console.log(comparativeNumber); //no caso aqui vai dar falso porque dez não é diferente de dez. Não vai dar diferente porque os dados são do mesmo tipo também. Se você convertesse o número dez para um tipo de dado de string, o comparativeNumber retornaria true.

// segue abaixo o jeito recomendado
const valueOne = 10;
const valueTwo = '10';
const compare = valueOne !== valueTwo;
console.log(compare); //ele checa tanto o tipo quanto o valor. Ele retornará true depois de converter o número dez pra string porque ele compara tipo e valor ao mesmo tempo.