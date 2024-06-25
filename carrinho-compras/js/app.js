let carrinho = document.getElementById("lista-produtos")
let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$0"


function adicionar() {
  let produto = document.getElementById("produto").value
  let nomeProduto = produto.split("-")[0]
  let valorProduto = produto.split("R$")[1]
  let quantidade = document.getElementById("quantidade").value

  
  if (quantidade == 0) {
    quantidade = 1
  }

  let preco = quantidade * valorProduto

  carrinho.innerHTML += adicionarItem(quantidade, nomeProduto, preco)

  totalGeral += preco
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$${totalGeral}`
  document.getElementById("quantidade").value = 0;

  console.log(carrinho)
}

limpar = () => {
  carrinho.innerHTML = ""
  document.getElementById("valor-total").textContent = "R$0"
  document.getElementById("quantidade").value = 0;
}

function adicionarItem(quant, nomeProduto, valor) {
  let nome = nomeProduto.split(" ")[0]
  let carrinhoProduto = document.getElementById("lista-produtos")
  
  if (document.getElementsByClassName("carrinho__produtos__produto").length != 0) {
    for (i in document.getElementsByClassName("carrinho__produtos__produto")) {
      if (document.getElementsByClassName("carrinho__produtos__produto")[i].classList.contains(`${nome}`) ) {
        return carrinhoProduto += `<section class="carrinho__produtos__produto ${nome}"> <span class="texto-azul">${quant*2}x</span> ${nomeProduto} <span class="texto-azul">R$${valor*2}</span></section>` 
      }
    }
  }

  return ` <section class="carrinho__produtos__produto ${nome}">
  <span class="texto-azul">${quant}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span>
  </section>`  
}