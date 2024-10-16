function cadastrarUsuario(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  localStorage.setItem("emailCadastrado", email);
  localStorage.setItem("senhaCadastrado", senha);

  window.location = "/paeeja-version6/section-login.html";
}

function loginUsuario(event) {
  event.preventDefault();

  const email = document.getElementById("email-login").value;
  const senha = document.getElementById("senha-login").value;

  const storedEmail = localStorage.getItem("emailCadastrado");
  const storedSenha = localStorage.getItem("senhaCadastrado");

  const errormsg = document.getElementById("errormsg"); // Pegando o elemento corretamente

  if (email === storedEmail && senha === storedSenha) {
    window.location  = "/paeeja-version6/site_paeja.html";
  } else {
    errormsg.hidden = false;
  }
}
