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