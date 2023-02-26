//Inserção de Vasos de Plástico
const plastico = [
    {
        imagem: "../img/vasos_img/plastico/vasos-plastico-1.jpg",
        produto: "Vaso Plástico Preto",
        precoSublinhado: "De: R$ 5,90",
        preco: "Por: R$ 3,90"
    },
    {
        imagem: "../img/vasos_img/plastico/vasos-plastico-2.jpg",
        produto: "Vaso Circular Preto",
        precoSublinhado: "De: R$ 6,90",
        preco: "Por: R$ 4,90"
    },
    {
        imagem: "../img/vasos_img/plastico/vasos-plastico-3.jpg",
        produto: "Vaso Circular Marrom",
        precoSublinhado: "De: R$ 5,90",
        preco: "Por: R$ 3,90"
    },
    {
        imagem: "../img/vasos_img/plastico/vasos-plastico-4.jpg",
        produto: "Combo Vasos Pretos",
        precoSublinhado: "De: R$ 12,90",
        preco: "Por: R$ 9,90"
    },
    {
        imagem: "../img/vasos_img/plastico/vasos-plastico-5.jpg",
        produto: "Vaso Quadrado Marrom",
        precoSublinhado: "De: R$ 10,90",
        preco: "Por: R$ 8,90"
    },
    {
        imagem: "../img/vasos_img/plastico/vasos-plastico-6.jpg",
        produto: "Vaso Verde Bebê",
        precoSublinhado: "De: R$ 5,90",
        preco: "Por: R$ 3,90"
    }
]

for(i = 0; i < plastico.length; i++){
    let divPlastico = document.createElement("div");
    divPlastico.innerHTML = `
        <img class = "img-plastico" src=${plastico[i].imagem} alt="Produtos-plastico">
        <p class = "text-plastico" >${plastico[i].produto}</p>
        <small><s class="text-plastico">${plastico[i].precoSublinhado}</s></small>
        <p class="text-plastico">${plastico[i].preco}</p>
        <p class="botao-produtos-plastico botao-adicionar">Adicionar ao Carrinho</p>
    `
    divPlastico.classList.add("div-plastico-produtos");
    let divPaiPlastico = document.getElementById("div-pai-plastico");
    divPaiPlastico.appendChild(divPlastico);
}

//Inserção de Vasos Cerâmica
const ceramica = [
    {
        imagem: "../img/vasos_img/ceramica/vasos-ceramica-1.jpg",
        produto: "Vasart Verona Vaso",
        precoSublinhado: "De: R$ 185,90",
        preco: "Por: R$ 159,90"
    },
    {
        imagem: "../img/vasos_img/ceramica/vasos-ceramica-2.jpg",
        produto: "Vasart Malta Vaso",
        precoSublinhado: "De: R$ 235,90",
        preco: "Por: R$ 195,90"
    },
    {
        imagem: "../img/vasos_img/ceramica/vasos-ceramica-3.jpg",
        produto: "Vaso Bege Cêramica",
        precoSublinhado: "De: R$ 45,90",
        preco: "Por: R$ 35,90"
    },
    {
        imagem: "../img/vasos_img/ceramica/vasos-ceramica-4.jpg",
        produto: "Vaso Cerâmica Redondo",
        precoSublinhado: "De: R$ 85,90",
        preco: "Por: R$ 53,90"
    }
]

for(i = 0; i < ceramica.length; i++){
    let divCeramica = document.createElement("div");
    divCeramica.innerHTML = `
        <img class = "img-plastico" src=${ceramica[i].imagem} alt="Produtos-plastico">
        <p class = "text-plastico" >${ceramica[i].produto}</p>
        <small><s class="text-plastico">${ceramica[i].precoSublinhado}</s></small>
        <p class="text-plastico">${ceramica[i].preco}</p>
        <p class="botao-produtos-plastico botao-adicionar">Adicionar ao Carrinho</p>
    `
    divCeramica.classList.add("div-plastico-produtos");
    let divPaiCeramica = document.getElementById("div-pai-ceramica");
    divPaiCeramica.appendChild(divCeramica);
}

//Inserção de Vasos Pedra
const pedra = [
    {
        imagem: "../img/vasos_img/pedra/vasos-pedra-1.jpg",
        produto: "Vasinhos Pedra Aqua",
        precoSublinhado: "De: R$ 85,90",
        preco: "Por: R$ 59,90"
    },
    {
        imagem: "../img/vasos_img/pedra/vasos-pedra-2.jpg",
        produto: "Decoração Vaso Pedras",
        precoSublinhado: "De: R$ 85,90",
        preco: "Por: R$ 65,90"
    },
    {
        imagem: "../img/vasos_img/pedra/vasos-pedra-3.jpg",
        produto: "Vaso Pedras Pequeno",
        precoSublinhado: "De: R$ 45,90",
        preco: "Por: R$ 35,90"
    }
]

for(i = 0; i < pedra.length; i++){
    let divPedra = document.createElement("div");
    divPedra.innerHTML = `
        <img class = "img-plastico" src=${pedra[i].imagem} alt="Produtos-plastico">
        <p class = "text-plastico" >${pedra[i].produto}</p>
        <small><s class="text-plastico">${pedra[i].precoSublinhado}</s></small>
        <p class="text-plastico">${pedra[i].preco}</p>
        <p class="botao-produtos-plastico botao-adicionar">Adicionar ao Carrinho</p>
    `
    divPedra.classList.add("div-plastico-produtos");
    let divPaiPedra = document.getElementById("div-pai-pedra");
    divPaiPedra.appendChild(divPedra);
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
