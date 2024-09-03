let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpiteUsuario = document.getElementById('palpite').value;
  const mensagem = document.getElementById('mensagem');

  tentativas++;

  if (palpiteUsuario == numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou em ${tentativas} tentativas.`;
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
  } else if (palpiteUsuario < numeroSecreto) {
    mensagem.textContent = "O número secreto é maior.";
  } else {
    mensagem.textContent = "O número secreto é menor.";
  }
}