let alugados = 0; 

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let btn = gameClicado.querySelector('.dashboard__item__button');
    let img = gameClicado.querySelector('.dashboard__item__img');

    if (img.classList.contains('dashboard__item__img--rented')) {
        btn.classList.remove('dashboard__item__button--return');
        btn.textContent = 'Alugar';
        img.classList.remove('dashboard__item__img--rented');
    } else if(confirm('Deseja confirmar o aluguel do jogo?') == true){
        btn.classList.add('dashboard__item__button--return');
        btn.textContent = 'Devolver';
        img.classList.add('dashboard__item__img--rented');
        alugados++
        console.log(alugados)
    }
}