//Funções de Informações certas e erradas
function correto(nomeInput,textoAjudaNome){
    nomeInput.classList.remove("errado");
    textoAjudaNome.classList.remove("visible");
    nomeInput.classList.add("correto");
}
function errado(nomeInput,textoAjudaNome){
    nomeInput.classList.add("errado");
    textoAjudaNome.classList.add("visible");
    nomeInput.classList.remove("correto");
}

//Validação Nome
let nomeInput = document.getElementById("nome");
let textoAjudaNome = document.getElementById("texto-ajuda-nome");

nomeInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor.length >= 3){
        correto(nomeInput,textoAjudaNome);
        objetoValidacao.nome = true
    }else{
        errado(nomeInput,textoAjudaNome);
        textoAjudaNome.innerText = "Insira um Nome Válido";
        objetoValidacao.nome = false
    }
})

//Validação Idade
let idadeInput = document.getElementById("idade");
let textoAjudaIdade = document.getElementById("texto-ajuda-idade");

idadeInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor >= 18){
        correto(idadeInput,textoAjudaIdade);
    }else{
        errado(idadeInput,textoAjudaIdade);
        textoAjudaIdade.innerText = "Você precisa ter mais que 18 anos";
    }
})

//Validação E-mail
let emailInput = document.getElementById("email");
let textoAjudaEmail = document.getElementById("texto-ajuda-email");

emailInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor.includes("@") && valor.includes(".com")){
        correto(emailInput,textoAjudaEmail);
    }else{
        errado(emailInput,textoAjudaEmail);
        textoAjudaEmail.innerText = "Insira um E-mail Válido";
    }
})

//Validação Repetir E-mail
let confirmaEmailInput = document.getElementById("confirma-email");
let textoConfirmaEmail = document.getElementById("texto-ajuda-confirma-email");

confirmaEmailInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor == emailInput.value){
        correto(confirmaEmailInput,textoConfirmaEmail);
    }else{
        errado(confirmaEmailInput,textoConfirmaEmail);
        textoConfirmaEmail.innerText = "Os E-mails precisam ser iguais";
    }
})

//Validação Senha
let senhaInput = document.getElementById("senha");
let textoAjudaSenha = document.getElementById("texto-ajuda-senha");

senhaInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor.length >= 5){
        correto(senhaInput,textoAjudaSenha);
    }else{
        errado(senhaInput,textoAjudaSenha);
        textoAjudaSenha.innerText = "Sua Senha precisa ter pelo menos 5 caracteres";
    }
})

//Validação Email - Login
let emailLogin = document.getElementById("email-login");
let textoAjudaEmailLogin = document.getElementById("texto-ajuda-login");

emailLogin.addEventListener("change", (e)=>{
    let valor = e.target.value.trim();
    if(valor == "gui100gabriel@gmail.com"){
        correto(emailLogin,textoAjudaEmailLogin);
    } else {
        errado(emailLogin,textoAjudaEmailLogin);
        textoAjudaEmailLogin.innerText = "E-mail não encontrado";
    }
})

//Validação Senha - Login
let senhaLogin = document.getElementById("senha-login");
let textoAjudaSenhaLogin = document.getElementById("texto-ajuda-senha-login");

senhaLogin.addEventListener("change", (e)=>{
    let valor = e.target.value.trim();
    if(valor == "1011proz"){
        correto(senhaLogin,textoAjudaSenhaLogin);
    } else {
        errado(senhaLogin,textoAjudaSenhaLogin);
        textoAjudaSenhaLogin.innerText = "Senha incorreta";
    }
})

//Mostrar Senha Cadastro
let clickMostrarSenhaCadastrar = document.getElementById("mostrar-password-cadastrar");
clickMostrarSenhaCadastrar.addEventListener("mousedown", ()=>{
    senhaInput.type = "text";
    })
clickMostrarSenhaCadastrar.addEventListener("mouseup", ()=>{
    senhaInput.type = "password";
})

//Mostrar Senha Login
let clickMostrarSenha = document.getElementById("mostrar-password-login");
clickMostrarSenha.addEventListener("mousedown", ()=>{
    senhaLogin.type = "text";
    })
clickMostrarSenha.addEventListener("mouseup", ()=>{
    senhaLogin.type = "password";
})

//Botão Voltar
let botaoVoltar = document.getElementById("botao-voltar");
botaoVoltar.addEventListener("click", ()=>{
    window.history.back()
})