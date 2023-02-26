//Inserção de plantas Frutiferas
const frutiferas = [
    {
        imagem: "../img/plantas_img/frutiferas/plantas-frutiferas-1.jpg",
        produto: "Muda de Amora Preta",
        precoSublinhado: "De: R$ 85,90",
        preco: "Por: R$ 53,90"
    },
    {
        imagem: "../img/plantas_img/frutiferas/plantas-frutiferas-2.jpg",
        produto: "Muda de Caju Anão",
        precoSublinhado: "De: R$ 29,90",
        preco: "Por: R$ 15,90"
    },
    {
        imagem: "../img/plantas_img/frutiferas/plantas-frutiferas-3.jpg",
        produto: "Ameixa de Madagascar",
        precoSublinhado: "De: R$ 35,90",
        preco: "Por: R$ 33,90"
    },
    {
        imagem: "../img/plantas_img/frutiferas/plantas-frutiferas-4.jpg",
        produto: "Ameixa Kelsy Paulista",
        precoSublinhado: "De: R$ 45,90",
        preco: "Por: R$ 41,90"
    },
    {
        imagem: "../img/plantas_img/frutiferas/plantas-frutiferas-5.jpg",
        produto: "Azeitona-do-Ceilão",
        precoSublinhado: "De: R$ 25,90",
        preco: "Por: R$ 19,90"
    },
    {
        imagem: "../img/plantas_img/frutiferas/plantas-frutiferas-6.jpg",
        produto: "Mangostão Amarelo",
        precoSublinhado: "De: R$ 55,90",
        preco: "Por: R$ 37,90"
    }
]

for(i = 0; i < frutiferas.length ; i++){
    let divFrutiferas = document.createElement("div");
    divFrutiferas.innerHTML = `
        <img class = "img-frutiferas" src=${frutiferas[i].imagem} alt="Produtos-frutiferas">
        <p class = "text-frutiferas" >${frutiferas[i].produto}</p>
        <small><s class="text-frutiferas">${frutiferas[i].precoSublinhado}</s></small>
        <p class="text-frutiferas">${frutiferas[i].preco}</p>
        <p class="botao-produtos-frutiferas botao-adicionar">Adicionar ao Carrinho</p>
    `
    divFrutiferas.classList.add("div-frutiferas-produtos");
    let divPaiFrutiferas = document.getElementById("div-pai-frutiferas");
    divPaiFrutiferas.appendChild(divFrutiferas);
}

//Inserção de plantas Flores
const flores = [
    {
        imagem: "../img/plantas_img/flores/plantas-flores-1.jpg",
        produto: "Antúrio Vermelho",
        precoSublinhado: "De: R$ 65,90",
        preco: "Por: R$ 45,90"
    },
    {
        imagem: "../img/plantas_img/flores/plantas-flores-2.jpg",
        produto: "Antúrio Branco ",
        precoSublinhado: "De: R$ 129,90",
        preco: "Por: R$ 89,90"
    },
    {
        imagem: "../img/plantas_img/flores/plantas-flores-3.jpg",
        produto: "Vitex",
        precoSublinhado: "De: R$ 65,90",
        preco: "Por: R$ 35,90"
    },
    {
        imagem: "../img/plantas_img/flores/plantas-flores-4.jpg",
        produto: "Trepadeira Saritéia",
        precoSublinhado: "De: R$ 68,90",
        preco: "Por: R$ 56,90"
    },
    {
        imagem: "../img/plantas_img/flores/plantas-flores-5.jpg",
        produto: "Paineira Vermelha",
        precoSublinhado: "De: R$ 45,90",
        preco: "Por: R$ 29,90"
    },
    {
        imagem: "../img/plantas_img/flores/plantas-flores-6.jpg",
        produto: "Mackaya bella",
        precoSublinhado: "De: R$ 35,90",
        preco: "Por: R$ 19,90"
    }
]

for(i = 0; i < flores.length ; i++){
    let divFlores = document.createElement("div");
    divFlores.innerHTML = `
        <img class = "img-flores" src=${flores[i].imagem} alt="Produtos-flores">
        <p class = "text-flores" >${flores[i].produto}</p>
        <small><s class="text-flores">${flores[i].precoSublinhado}</s></small>
        <p class="text-flores">${flores[i].preco}</p>
        <p class="botao-produtos-flores botao-adicionar">Adicionar ao Carrinho</p>
    `
    divFlores.classList.add("div-flores-produtos");
    let divPaiFlores = document.getElementById("div-pai-flores");
    divPaiFlores.appendChild(divFlores);
}

//inserção de plantas Ornamentais
const ornamentais = [
    {
        imagem: "../img/plantas_img/ornamentais/plantas-ornamentais-1.jpg",
        produto: "Areca Bambú",
        precoSublinhado: "De: R$ 185,90",
        preco: "Por: R$ 153,90"
    },
    {
        imagem: "../img/plantas_img/ornamentais/plantas-ornamentais-2.jpg",
        produto: "Chuva-de-Prata",
        precoSublinhado: "De: R$ 129,90",
        preco: "Por: R$ 89,90"
    },
    {
        imagem: "../img/plantas_img/ornamentais/plantas-ornamentais-3.jpg",
        produto: "Croton Americano",
        precoSublinhado: "De: R$ 235,90",
        preco: "Por: R$ 124,90"
    },
    {
        imagem: "../img/plantas_img/ornamentais/plantas-ornamentais-4.jpg",
        produto: "Cerejeira Sakura",
        precoSublinhado: "De: R$ 345,90",
        preco: "Por: R$ 245,90"
    },
    {
        imagem: "../img/plantas_img/ornamentais/plantas-ornamentais-5.jpg",
        produto: "Lavanda",
        precoSublinhado: "De: R$ 85,90",
        preco: "Por: R$ 58,90"
    },
    {
        imagem: "../img/plantas_img/ornamentais/plantas-ornamentais-6.jpg",
        produto: "Pinho Negro",
        precoSublinhado: "De: R$ 99,90",
        preco: "Por: R$ 89,90"
    }
]

for(i = 0; i < ornamentais.length ; i++){
    let divOrnamentais = document.createElement("div");
    divOrnamentais.innerHTML = `
        <img class = "img-flores" src=${ornamentais[i].imagem} alt="Produtos-ornamentais">
        <p class = "text-flores" >${ornamentais[i].produto}</p>
        <small><s class="text-flores">${ornamentais[i].precoSublinhado}</s></small>
        <p class="text-flores">${ornamentais[i].preco}</p>
        <p class="botao-produtos-flores botao-adicionar">Adicionar ao Carrinho</p>
    `
    divOrnamentais.classList.add("div-ornamentais-produtos");
    let divPaiOrmanetais = document.getElementById("div-pai-ornamentais");
    divPaiOrmanetais.appendChild(divOrnamentais);
}

//inserção de plantas Samambaias
const samambaias = [
    {
        imagem: "../img/plantas_img/samambaias/plantas-samambaias-1.png",
        produto: "Asplenium Osaka",
        precoSublinhado: "De: R$ 85,90",
        preco: "Por: R$ 53,90"
    },
    {
        imagem: "../img/plantas_img/samambaias/plantas-samambaias-2.png",
        produto: "Avenca Fulvum",
        precoSublinhado: "De: R$ 29,90",
        preco: "Por: R$ 15,90"
    },
    {
        imagem: "../img/plantas_img/samambaias/plantas-samambaias-3.png",
        produto: "Asplenuim",
        precoSublinhado: "De: R$ 35,90",
        preco: "Por: R$ 33,90"
    },
    {
        imagem: "../img/plantas_img/samambaias/plantas-samambaias-4.png",
        produto: "chifre de Veado",
        precoSublinhado: "De: R$ 45,90",
        preco: "Por: R$ 41,90"
    },
    {
        imagem: "../img/plantas_img/samambaias/plantas-samambaias-5.png",
        produto: "Renda Francesa",
        precoSublinhado: "De: R$ 25,90",
        preco: "Por: R$ 19,90"
    },
    {
        imagem: "../img/plantas_img/samambaias/plantas-samambaias-6.png",
        produto: "Havaiana Mini",
        precoSublinhado: "De: R$ 55,90",
        preco: "Por: R$ 37,90"
    }
]

for(i = 0; i < samambaias.length ; i++){
    let divSamambaias= document.createElement("div");
    divSamambaias.innerHTML = `
        <img class = "img-flores" src=${samambaias[i].imagem} alt="Produtos-samambaias">
        <p class = "text-flores" >${samambaias[i].produto}</p>
        <small><s class="text-flores">${samambaias[i].precoSublinhado}</s></small>
        <p class="text-flores">${samambaias[i].preco}</p>
        <p class="botao-produtos-flores botao-adicionar">Adicionar ao Carrinho</p>
    `
    divSamambaias.classList.add("div-samambaias-produtos");
    let divPaiSamambaias = document.getElementById("div-pai-samambaias");
    divPaiSamambaias.appendChild(divSamambaias);
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