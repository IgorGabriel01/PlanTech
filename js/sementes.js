//Inserção de Sementes Monocotiledôneas
const mono = [
    {
        imagem: "../img/sementes_img/mono/sementes-mono-1.jpg",
        produto: "Melíssa Erva Cídreira",
        precoSublinhado: "De: R$ 5,90",
        preco: "Por: R$ 3,90"
    },
    {
        imagem: "../img/sementes_img/mono/sementes-mono-2.jpg",
        produto: "Sementes de Milho",
        precoSublinhado: "De: R$ 9,90",
        preco: "Por: R$ 5,90"
    },
    {
        imagem: "../img/sementes_img/mono/sementes-mono-3.jpg",
        produto: "Quiabo Santa Cruz",
        precoSublinhado: "De: R$ 5,90",
        preco: "Por: R$ 3,90"
    },
    {
        imagem: "../img/sementes_img/mono/sementes-mono-4.jpg",
        produto: "Almeirão Pão De Açúcar",
        precoSublinhado: "De: R$ 5,90",
        preco: "Por: R$ 1,90"
    },
    {
        imagem: "../img/sementes_img/mono/sementes-mono-5.jpg",
        produto: "Isla Rúcula Gigante",
        precoSublinhado: "De: R$ 5,90",
        preco: "Por: R$ 2,90"
    },
    {
        imagem: "../img/sementes_img/mono/sementes-mono-6.jpg",
        produto: "Alface Crespa",
        precoSublinhado: "De: R$ 9,90",
        preco: "Por: R$ 7,90"
    }
]

for(i = 0; i < mono.length ; i++){
    let divMono = document.createElement("div");
    divMono.innerHTML = `
        <img class = "img-mono" src=${mono[i].imagem} alt="Produtos-mono">
        <p class = "text-mono" >${mono[i].produto}</p>
        <small><s class="text-mono">${mono[i].precoSublinhado}</s></small>
        <p class="text-mono">${mono[i].preco}</p>
        <p class="botao-produtos-mono botao-adicionar">Adicionar ao Carrinho</p>
    `
    divMono.classList.add("div-mono-produtos");
    let divPaiMono = document.getElementById("div-pai-mono");
    divPaiMono.appendChild(divMono);
}

//Inserção de Sementes Monocotiledôneas
const dico = [
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

for(i = 0; i < dico.length ; i++){
    let divDico = document.createElement("div");
    divDico.innerHTML = `
        <img class = "img-mono" src=${dico[i].imagem} alt="Produtos-dico">
        <p class = "text-mono" >${dico[i].produto}</p>
        <small><s class="text-mono">${dico[i].precoSublinhado}</s></small>
        <p class="text-mono">${dico[i].preco}</p>
        <p class="botao-produtos-mono botao-adicionar">Adicionar ao Carrinho</p>
    `
    divDico.classList.add("div-mono-produtos");
    let divPaiMono = document.getElementById("div-pai-dico");
    divPaiMono.appendChild(divDico);
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