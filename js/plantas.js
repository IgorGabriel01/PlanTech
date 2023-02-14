//Inserção de plantas Frutiferas
const frutiferas = [
    {
        imagem: "../img/plantas_img/frutiferas/plantas-frutiferas-1.jpg",
        produto: "Muda de Amora Preta Gigante Italiana",
        precoSublinhado: "De: R$ 85,90",
        preco: "Por: R$ 53,90"
    },
    {
        imagem: "../img/plantas_img/frutiferas/plantas-frutiferas-2.jpg",
        produto: "Muda de Caju Anão Precoce",
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
    console.log(divFrutiferas);
    divFrutiferas.innerHTML = `
        <img class = "img-frutiferas" src=${frutiferas[i].imagem} alt="Produtos-frutiferas">
        <p class = "text-frutiferas" >${frutiferas[i].produto}</p>
        <small><s class="text-frutiferas">${frutiferas[i].precoSublinhado}</s></small>
        <p class="text-frutiferas">${frutiferas[i].preco}</p>
    `
    let divPaiFrutiferas = document.getElementById("div-pai-frutiferas");
    divPaiFrutiferas.appendChild(divFrutiferas);
}

