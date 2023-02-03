//Capturando o Elemento botão produtos e o Elemento Div Produtos
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

//Capturando os itens do Carrinho
let quantidadeCarrinho = document.getElementById("quantidade-carrinho");
//Adiocionando o Valor de itens no Carrinho
let contador = 0;
botaoProdutos.addEventListener("click", ()=>{
    contador = contador + 1;
    quantidadeCarrinho.innerText = contador;
})

//Criando Produtos/Objetos para inserção na DivPai com DOM
const arrayProdutos = [
    {   
        produto: "Tesoura 155mm Trapp",
        precoSublinhado: "De: R$ 15,90",
        preco: "Por: R$ 13,90"
    },
    {
        produto: "gostei muito da loja",
        precoSublinhado: "De: R$ 15,90",
        preco: "Por: R$ 13,90"
    },
    {
        produto: "teste2",
        precoSublinhado: "De: R$ 15,90",
        preco: "Por: R$ 13,90"
    }
]

//Criando o elemento Div Produtos com o DOM
for(i = 0; i < arrayProdutos.length; i++){
    let div = document.createElement("div");
    div.innerHTML = `
        <div id="div-produtos" class="produtos-index">
            <img class="img-produtos-index" src=${arrayProdutos[i].imagem} alt="produto-1-index">
            <p class="text-produtos">${arrayProdutos[i].produto}</p>
            <small><s class="text-produtos">${arrayProdutos[i].precoSublinhado}</s></small>
            <p class="text-produtos">${arrayProdutos[i].precoSublinhado}</p>
            <p id="botao-produtos" class="invisible">Adicionar ao Carrinho</p>
        </div>
    `
    let divPai = document.getElementById("div-pai");
    divPai.appendChild(div);
}