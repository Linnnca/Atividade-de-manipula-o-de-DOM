const miniaturas = document.querySelectorAll('.miniatura');
const imagemDestaque = document.getElementById('imagem-destaque');

miniaturas.forEach(miniatura => {
  miniatura.addEventListener('click', () => {
    imagemDestaque.src = miniatura.src;
    imagemDestaque.style.display = 'block';
  });
});