function meuEscopo () {
    const form = document.querySelector('.form'); //o documento está selecionado com o document porque sei que o formulário está no HTML
    const resultado = document.querySelector('.resultado');
    

    const pessoas = []; //array para armazenar os dados das pessoas.



    let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault(); //faz com que a página não seja atualizada.
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        });

        console.log(pessoas); //aparece o array pessoas.

        resultado.innerHTML += `<p>Nome:${nome.value} Sobrenome:${sobrenome.value} Peso:${peso.value} Altura:${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm); //adiciona um 'escutador de eventos'
}
meuEscopo();