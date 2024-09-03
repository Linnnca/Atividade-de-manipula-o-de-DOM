const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operacao = document.getElementById('operacao');
const calcularBtn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

calcularBtn.addEventListener('click', () => {
  const valor1 = parseFloat(num1.value);
  const valor2 = parseFloat(num2.value);
  const oper = operacao.value;

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.textContent = 'Por favor, insira apenas números.';
  } else {
    let resultadoCalculo;
    switch (oper) {
      case '+':
        resultadoCalculo = valor1 + valor2;
        break;
      case '-':
        resultadoCalculo = valor1 - valor2;
        break;
      case '*':
        resultadoCalculo = valor1 * valor2;
        break;
      case '/':
        resultadoCalculo = valor1 / valor2;
        break;
    }
    resultado.textContent = `Resultado: ${resultadoCalculo}`;
  }
});