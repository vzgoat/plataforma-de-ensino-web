function cadastrarUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  localStorage.setItem("nomeCadastrado", nome);
  localStorage.setItem("emailCadastrado", email);
  localStorage.setItem("senhaCadastrado", senha);

  window.location = "../pages/login.html";
}

function loginUsuario(event) {
  event.preventDefault();

  const email = document.getElementById("email-login").value;
  const senha = document.getElementById("senha-login").value;

  const storedEmail = localStorage.getItem("emailCadastrado");
  const storedSenha = localStorage.getItem("senhaCadastrado");

  const errormsg = document.getElementById("errormsg"); // Pegando o elemento corretamente

  if (email === storedEmail && senha === storedSenha) {
    localStorage.setItem("verificarLogin", "true");
    window.location = "../pages/home.html";
  } else {
    errormsg.hidden = false;
  }
}

function sairLogin(event) {
  event.preventDefault();

  localStorage.removeItem("verificarLogin");
  window.location.reload();
}

if(localStorage.getItem("nomeCadastrado") != null){
document.getElementById("nomeUsuario").textContent = localStorage.getItem("nomeCadastrado");
}
if (localStorage.getItem("verificarLogin") === "true") {
  document.getElementById("botaoEntrarNav").style.display = "none";
  document.getElementById("botaoCadastrarNav").style.display = "none";
  document.getElementById("botaoSair").style.display = "inline";
  nomeUsuario.hidden = false;
  iconUsuario.hidden = false;
}else{
  document.getElementById("botaoSair").style.display = "none";
  nomeUsuario.hidden = true;
  iconUsuario.hidden = true;
}