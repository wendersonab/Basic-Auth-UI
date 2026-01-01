// parte 1: botão de clique aqui
const cliqueAqui = document.getElementById("clickme");
const btnContainer = document.getElementsByClassName("container-botao")[0];
const loginCad = document.getElementsByClassName("container-login-cadastro")[0];
const login = document.getElementsByClassName("login")[0];

// parte 2: botão de login para cadastro
const loginParaCad = document.getElementsByClassName("link")[0];
const cadastro = document.getElementsByClassName("cadastro")[0];

// parte 3: botão de cadastro para login
const cadParaLogin = document.getElementsByClassName("link")[1];

// função de clique para fechar o container de clique e abrir o container de login com o login já aberto | parte 1
cliqueAqui.addEventListener("click", function(){
    btnContainer.classList.add("none");
    loginCad.classList.remove("none");
    login.classList.remove("none");
})

// função de clique para fechar login e abrir cadastro | parte 2
loginParaCad.addEventListener("click", function(){
    login.classList.add("none");
    cadastro.classList.remove("none");
})

// funcão de clique para fechar cadastro e reabrir login
cadParaLogin.addEventListener("click", function(){
    cadastro.classList.add("none");
    login.classList.remove("none")
})

// parte 4: situação das senhas
const inputSenhaUm = document.getElementById("passc");
const inputSenhaDois = document.getElementById("passcc");
const situacaoSenha = document.getElementById("situacao-da-senha");
let senha = false

// funcao de verificação de senhas
function VerificarSenhas() {
    const senhaUm = inputSenhaUm.value;
    const senhaDois = inputSenhaDois.value;
    const tamanhoSenha = senhaUm.length;

        // se as senhas forem diferentes e ao mesmo tempo ela tenha menos de 8 caracteres
    // if (tamanhoSenha < 8 && senhaUm != senhaDois){
    //     situacaoSenha.innerText = "A senha deve ter pelo menos 8 caracteres e serem iguais.";
    //     situacaoSenha.classList.remove("none");
    // } else
        // se a senha for menor do que oito caracteres
    if (tamanhoSenha < 8){
        situacaoSenha.innerText = "A senha deve ter pelo menos 8 caracteres";
        situacaoSenha.classList.remove("none");
        // se a senha um for diferente da senha dois
    } else if (senhaUm != senhaDois){
        situacaoSenha.innerText = "As senhas não coincidem";
        situacaoSenha.classList.remove("none");
        //caso tudo esteja certo
    } else {
        situacaoSenha.innerText = "";
        situacaoSenha.classList.add("none");
        senha = true
    }
}

// evento que verifica se a senha foi modificada e se sim ele verifica se as senhas coincidem e se tem 8 ou mais caracteres, se sim o usuario pode avancar | parte 4
inputSenhaUm.addEventListener("change", function(){
    VerificarSenhas()
})
inputSenhaDois.addEventListener("change", function(){
    VerificarSenhas()
})

// parte 5: verificar se a senha está ok e avancar o usuário para outra página
const btnCadastro = document.getElementById("cadastrar");

if (senha === true){
    btnCadastro.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = "cadastro.html";
    })
}
