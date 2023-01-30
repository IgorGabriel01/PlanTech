let botaoProdutos = document.getElementById("botao-produtos");
let divProdutos = document.getElementById("div-produtos");

divProdutos.addEventListener("mouseover", ()=>{
    botaoProdutos.classList.remove("invisible");
    botaoProdutos.classList.add("mostra-botao-produtos-index");
})
divProdutos.addEventListener("mouseout", ()=>{
    botaoProdutos.classList.add("invisible");
    botaoProdutos.classList.remove("mostra-botao-produtos-index");
})

let quantidadeCarrinho = document.getElementById("quantidade-carrinho");

let contador = 0;
botaoProdutos.addEventListener("click", ()=>{
    contador = contador + 1;
    quantidadeCarrinho.innerText = contador;
})