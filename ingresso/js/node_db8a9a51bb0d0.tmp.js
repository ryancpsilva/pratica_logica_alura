let pista = document.getElementById('qtd-pista')

let superior = document.getElementById('qtd-superior')

let inferior = document.getElementById('qtd-inferior')

function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value

    let qtd = document.getElementById('qtd').value

    if (verificarQuantidade()) {
        return
    }
    switch (tipo) {
        case 'inferior':
            if (inferior.textContent < Number(qtd)) {
                alert('[ERRO] A quantidade escolhida é maior que a quantidade de ingressos')
            } else {
                inferior.textContent -= qtd
            }
            break;
    
        case 'pista':
            if (pista.textContent < Number(qtd)) {
                alert('[ERRO] A quantidade escolhida é maior que a quantidade de ingressos')
            } else {
                pista.textContent -= qtd
            }
            break;

        case 'superior':
            if (superior.textContent < Number(qtd)) {
                alert('[ERRO] A quantidade escolhida é maior que a quantidade de ingressos')
            } else {
                superior.textContent -= qtd
            }
            break;
    }
}

function verificarQuantidade() {
    let qtd = document.getElementById('qtd').value

    if (Number(qtd) > 10) {
        alert('[ERRO] A quantidade escolhida deve ser menor ou igual a 10.')
        return true
    }
}