var button = document.querySelector('button');
button.onclick = function() {
  var nome = prompt('Qual o seu nome?');
  var idade = prompt('Quantos anos você tem?');
  var linguagem = prompt('Qual linguagem de programação você está estudando?');

  alert("Olá "+nome+", você tem "+idade+" anos e já está aprendendo "+linguagem+"!"); 
}