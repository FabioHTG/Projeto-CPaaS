// Função para puxar endereço pelo cep

function limpa_formulário_cep() {
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
        }
        else {
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        var cep = valor.replace(/\D/g, '');

        if (cep != "") {

            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {

                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";

                var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                document.body.appendChild(script);

            }
            else {
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }
        else {
            limpa_formulário_cep();
        }
    };

function limpa_formulário_cep() {
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
        }
        else {
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        var cep = valor.replace(/\D/g, '');

        if (cep != "") {

            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {

                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";

                var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                document.body.appendChild(script);

            }
            else {
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }
        else {
            limpa_formulário_cep();
        }
    };

// Função para mostrar ou não mostrar a senha

function mostrar(){
  var inputPas= document.getElementById('senha');
  var showPas = document.getElementById('i');
  
  if(inputPas.type === 'password'){
    inputPas.setAttribute('type','text')
    showPas.classList.replace('bi-eye-fill','bi-eye-slash-fill')
  }
  else {
    inputPas.setAttribute('type','password')
    showPas.classList.replace('bi-eye-slash-fill','bi-eye-fill')
  }
}

function mostrarr(){
  var inputPass= document.getElementById('senhaconfirma');
  var showPass= document.getElementById('ii');
  
  if(inputPass.type === 'password'){
    inputPass.setAttribute('type','text')
    showPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
  }
  else {
    inputPass.setAttribute('type','password')
    showPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
  }
}


function mostrarr(){
  var inputPass= document.getElementById('senhaconfirma');
  var showPass= document.getElementById('ii');
  
  if(inputPass.type === 'password'){
    inputPass.setAttribute('type','text')
    showPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
  }
  else {
    inputPass.setAttribute('type','password')
    showPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
  }
}

// Função para bloquar caracteres

function bloquearCaracteres(event) {
   var tecla = event.which || event.keyCode;
   var teclaCaracter = String.fromCharCode(tecla);
 
   var regex = /^[0-9!@#$%^&*(),.?":{}|<>]$/;
 
   if (regex.test(teclaCaracter)) {
     event.preventDefault();
   }
 }

// Função para validar o formulário

function exibirMensagemErro(mensagem) {
  var mensagemDiv = document.createElement('div');
  mensagemDiv.className = 'erro';
  mensagemDiv.textContent = mensagem;

  var formulario = document.getElementById('formulario');
  formulario.insertBefore(mensagemDiv, formulario.firstChild);
}

function validarFormulario() {
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;
  var senhaConfirmada = document.getElementById('senhaconfirma').value;

  if (usuario === "") {
    exibirMensagemErro("Por favor, informe o nome de login (O campo Login deve ter exatamente 6 caracteres alfabéticos).");
    return false;
  }

  if (senha === "") {
    exibirMensagemErro("Por favor, informe a senha (– O campo Senha deve ter 8 caracteres alfabéticos).");
    return false;
  }

  if (senha !== senhaConfirmada) {
    exibirMensagemErro("Os campos Senha e Confirma Senha devem ser iguais.");
    return false;
  }

  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      exibirMensagemErro("Por favor, preencha todos os campos.");
      return false;
    }
  }

  salvarCredenciais(usuario, senha);

  window.location.href = "login.html";

  return true;
}

document.getElementById('botão').addEventListener('click', function(event) {
  event.preventDefault(); 
  var mensagemErro = document.querySelector('.erro');
  if (mensagemErro) {
    mensagemErro.remove();
  }
  validarFormulario();
});

// Função para salvar no localStorage

function salvarCredenciais() {
  var registrations = JSON.parse(localStorage.getItem('registrations')) || [];

  var nome = document.getElementById('nome').value;
  var data = document.getElementById('data').value;
  var cpf = document.getElementById('cpf').value;
  var mae = document.getElementById('mae').value;
  var email = document.getElementById('email').value;
  var cel = document.getElementById('cel').value;
  var tel = document.getElementById('tel').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var cep = document.getElementById('cep').value;
  var rua = document.getElementById('rua').value;
  var numero = document.getElementById('numero').value;
  var bairro = document.getElementById('bairro').value;
  var complete = document.getElementById('complete').value;
  var cidade = document.getElementById('cidade').value;
  var uf = document.getElementById('uf').value;
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  var registration = {
    nome: nome,
    data: data,
    cpf: cpf,
    mae: mae,
    email: email,
    cel: cel,
    tel: tel,
    gender: gender,
    cep: cep,
    rua: rua,
    numero: numero,
    bairro: bairro,
    complete: complete,
    cidade: cidade,
    usuario: usuario,
    senha: senha
  };

  registrations.push(registration);

  localStorage.setItem('registrations', JSON.stringify(registrations));
}
