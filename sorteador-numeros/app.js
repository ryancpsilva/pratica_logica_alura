function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('O campo "de" deve ser menor que o campo "até".');
        return reiniciar();
    }

    if (quantidade > ate - de) {
        alert('O campo "quantidade" é maior que o intervalo de números a ser sorteados. Corrija para evitar erros.')
        return reiniciar(
            
        );
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;
    alterarStatusBotao();
} 

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
   let botao = document.getElementById('btn-reiniciar');
   if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
   } else {
    botao.classList.add('container__botao-desabilitado');
    botao.classList.remove('container__botao');
   }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora </label>`;
    alterarStatusBotao()
}