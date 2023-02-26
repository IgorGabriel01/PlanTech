//Inserção de Ferramentas Luvas
const luvas = [
    {
        imagem: "../img/acessorios_img/luvas/ferramentas-luvas-1.jpg",
        produto: "Luva Anticorte Jardim",
        precoSublinhado: "De: R$ 15,90",
        preco: "Por: R$ 13,90"
    },
    {
        imagem: "../img/acessorios_img/luvas/ferramentas-luvas-2.jpg",
        produto: "Luva Jardinagem Garra",
        precoSublinhado: "De: R$ 29,90",
        preco: "Por: R$ 25,90"
    },
    {
        imagem: "../img/acessorios_img/luvas/ferramentas-luvas-3.jpg",
        produto: "Luva jardinagem em pol",
        precoSublinhado: "De: R$ 17,90",
        preco: "Por: R$ 14,90"
    }
]

for(i = 0; i < luvas.length ; i++){
    let divLuvas = document.createElement("div");
    divLuvas.innerHTML = `
        <img class = "img-luvas" src=${luvas[i].imagem} alt="Produtos-luvas">
        <p class = "text-luvas" >${luvas[i].produto}</p>
        <small><s class="text-luvas">${luvas[i].precoSublinhado}</s></small>
        <p class="text-luvas">${luvas[i].preco}</p>
        <p class="botao-produtos-luvas botao-adicionar">Adicionar ao Carrinho</p>
    `
    divLuvas.classList.add("div-luvas-produtos");
    let divPaiLuvas = document.getElementById("div-pai-luvas");
    divPaiLuvas.appendChild(divLuvas);
}

//Inserção de Ferramentas Pá
const pa = [
    {
        imagem: "../img/acessorios_img/pa/ferramentas-pa-1.jpg",
        produto: "Pazinha Larga De 260",
        precoSublinhado: "De: R$ 15,90",
        preco: "Por: R$ 13,90"
    },
    {
        imagem: "../img/acessorios_img/pa/ferramentas-pa-2.jpg",
        produto: "Pazinha para Jardinagem",
        precoSublinhado: "De: R$ 19,90",
        preco: "Por: R$ 15,90"
    },
    {
        imagem: "../img/acessorios_img/pa/ferramentas-pa-3.jpg",
        produto: "Pazinha Estreita",
        precoSublinhado: "De: R$ 15,90",
        preco: "Por: R$ 13,90"
    }
]

for(i = 0; i < pa.length ; i++){
    let divPa = document.createElement("div");
    divPa.innerHTML = `
        <img class = "img-pa" src=${pa[i].imagem} alt="Produtos-pa">
        <p class = "text-pa" >${pa[i].produto}</p>
        <small><s class="text-pa">${pa[i].precoSublinhado}</s></small>
        <p class="text-pa">${pa[i].preco}</p>
        <p class="botao-produtos-luvas botao-adicionar">Adicionar ao Carrinho</p>
    `
    divPa.classList.add("div-luvas-produtos");
    let divPaiPa = document.getElementById("div-pai-pa");
    divPaiPa.appendChild(divPa);
}

//Inserção de Ferramentas Tesouras
const tesouras = [
    {
        imagem: "../img/acessorios_img/tesouras/ferramentas-tesoura-1.jpg",
        produto: "Tesoura Poda Palisad",
        precoSublinhado: "De: R$ 15,90",
        preco: "Por: R$ 13,90"
    },
    {
        imagem: "../img/acessorios_img/tesouras/ferramentas-tesoura-2.jpg",
        produto: "Tesoura Poda Tramontina",
        precoSublinhado: "De: R$ 19,90",
        preco: "Por: R$ 15,90"
    },
    {
        imagem: "../img/acessorios_img/tesouras/ferramentas-tesoura-3.jpg",
        produto: "Tesoura para Cerca Viva",
        precoSublinhado: "De: R$ 25,90",
        preco: "Por: R$ 23,90"
    }
]

for(i = 0; i < tesouras.length ; i++){
    let divTesouras = document.createElement("div");
    divTesouras.innerHTML = `
        <img class = "img-tesouras" src=${tesouras[i].imagem} alt="Produtos-tesouras">
        <p class = "text-tesouras" >${tesouras[i].produto}</p>
        <small><s class="text-tesouras">${tesouras[i].precoSublinhado}</s></small>
        <p class="text-tesouras">${tesouras[i].preco}</p>
        <p class="botao-produtos-luvas botao-adicionar">Adicionar ao Carrinho</p>
    `
    divTesouras.classList.add("div-luvas-produtos");
    let divPaiTesouras = document.getElementById("div-pai-tesouras");
    divPaiTesouras.appendChild(divTesouras);
}

//Adicionar ao Carrinho
let quantidadeCarrinho = document.getElementById("quantidade-carrinho");

let botaoAdicionar = document.getElementsByClassName("botao-adicionar");
let contador = 0;
for(i = 0; i < botaoAdicionar.length; i++){
    botaoAdicionar[i].addEventListener("click", ()=>{
        contador = contador + 1;
        quantidadeCarrinho.innerText = contador;
    })
}
