const novaTarefaInput = document.getElementById('novaTarefa');
const adicionarBtn = document.getElementById('adicionar');
const tarefasList = document.getElementById('tarefas');
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
mostrarTarefas();

adicionarBtn.addEventListener('click', () => {
  const novaTarefa = novaTarefaInput.value;
  if (novaTarefa) {
    tarefas.push({ texto: novaTarefa, concluida: false });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    mostrarTarefas();
    novaTarefaInput.value = '';
  }
});

function mostrarTarefas() {
  tarefasList.innerHTML = '';
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.textContent = tarefa.texto;
    if (tarefa.concluida) {
      li.classList.add('concluida');
    }
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', () => {
      tarefas.splice(index, 1);
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      mostrarTarefas();
    });
    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.addEventListener('click', () => {
      tarefa.concluida = !tarefa.concluida;
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      mostrarTarefas();
    });
    li.appendChild(botaoExcluir);
    li.appendChild(botaoConcluir);
    tarefasList.appendChild(li);
  });
}