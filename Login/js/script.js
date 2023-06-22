// Recuperar os dados do localStorage
/*function obterRegistrosSalvos() {
  var savedRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];
  return savedRegistrations;
}

var registrations = obterRegistrosSalvos();
console.log(registrations);


// Função para validar o login
function validarLogin() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  var savedRegistrations = obterRegistrosSalvos();

  var isValid = savedRegistrations.some(function(registration) {
    return registration.usuario === usuario && registration.senha === senha;
  });

  if (isValid) {
    window.location.href = "cpaas.html";
  } else {
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerText = "Usuário ou senha inválidos.";
  }
}*/

// Recuperar os dados do localStorage
function obterRegistrosSalvos() {
  var savedRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];
  return savedRegistrations;
}

var registrations = obterRegistrosSalvos();
console.log(registrations);

// Função para validar o login
function validarLogin() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  var savedRegistrations = obterRegistrosSalvos();

  var isValid = savedRegistrations.some(function(registration) {
    return registration.usuario === usuario && registration.senha === senha;
  });

  if (isValid) {
    // Armazenar o nome do usuário no localStorage
    localStorage.setItem('usuarioLogado', usuario);
    window.location.href = "cpaas.html";
  } else {
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerText = "Usuário ou senha inválidos.";
  }
}

// Exibir o nome do usuário na navbar
function exibirNomeUsuario() {
  var usuarioLogado = localStorage.getItem('usuarioLogado');
  var navbarElement = document.getElementById('navbar-username');
  if (usuarioLogado && navbarElement) {
    navbarElement.innerText = usuarioLogado;
  }
}

// Chamar a função para exibir o nome do usuário quando a página for carregada
window.addEventListener('DOMContentLoaded', exibirNomeUsuario);





