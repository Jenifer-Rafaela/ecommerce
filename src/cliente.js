
// Recuperar o nome e sobrenome do cliente do LocalStorage
var nomeUsuario = localStorage.getItem('nomeUsuario');
var sobrenomeUsuario = localStorage.getItem('sobrenomeUsuario');

// Caso nenhum cliente tenha feito login
if(nomeUsuario === 'Login'){
    var showLogin = document.getElementById('login'); //pega o span de login que está escondido
    showLogin.style.display = 'block'; // faz o display
} else{
    // Exibir o nome e sobrenome do cliente na página
    document.getElementById('nomeUsuario').textContent = nomeUsuario;
    document.getElementById('sobrenomeUsuario').textContent = sobrenomeUsuario;
    var showUser = document.getElementById('nome'); //pega o span de nome do usuario que está escondido
    showUser.style.display = 'block'; //faz o display
}

// Quando o cliente apertar sair o localStorage mudará para login, assim se ninguém entrar com login e senha
// aparecerá a opção de fazer o login.
var sair = document.getElementById('Sair');
sair.addEventListener('click', logout);

function logout(){
    localStorage.setItem('carrinho', '');
    localStorage.setItem('nomeUsuario', 'Login');
    localStorage.setItem('idUsuario', '');
    localStorage.setItem('sobrenomeUsuario', '');
}



