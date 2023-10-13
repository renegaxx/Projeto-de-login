//selecionando o formulário de login
const form = document.querySelector('.login-form');

//selecionando os campos de entrada do usuário e senha
const usernameInput = form.querySelector('input[type="text"]');
  //dessa forma pegamos identificamos a tag pelo tipo de input dela, usamos o form ao invés de document para indicar em qual classe, ou dentro de onde eu vou achar esse input
const senhaInput = form.querySelector('input[type="password"]');

//adiciona um ouvinte de eventos ao formulário para detectar quando o usuário clica no botão
form.addEventListener('submit', (event) => {
    //event.preventDefault() evita que a página seja recarregada quando o formulário for enviado
    event.preventDefault();

    //obtém os valores do campos de entrada do usuário e senha e o trim() remove os espaços em braco que podem ter antes ou depois de cada campo
    const usuario = usernameInput.value.trim();
    const senha = senhaInput.value.trim();

    //verifica se os campos de entrada e saida estão vazios
    if (usuario === '' || senha === '') {
        alert('Por favor, preencha os campos.');
    //verifica se as informações de login e senha estão corretas
    }else if (usuario === nameUser && senha === senhaDoUser) {
        alert('Bem-vindo!');
        //redireciona o usuário para uma outra página após o login
        location.replace("/Tarefa/index.html", "_self");
    }else {
        //exibe uma mensagem de erro se as informações estiverem erradas
        alert('Usuário de senha incorreto, tente novamente!');
    }
})

const criarConta = document.getElementById('contaCriar');
const nameUser = document.getElementById('nome');
const emailUser = document.getElementById('email');
const usuarioUser = document.getElementById('usuario');
const senhaUser = document.getElementById('senha');

criarConta.addEventListener('submit', (event) => {
    event.preventDefault();
})

const name = nameUser.value.trim();
const email = emailUser.value.trim();
const user = usuarioUser.value.trim();
const senhaDoUser = senhaUser.value.trim();

