// Seleciona todos os botões de navegação e todas as páginas
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

// Função para alternar entre as salas do museu
function navigateTo(targetId) {
  // Remove a classe 'active' de todas as páginas e botões
  pages.forEach(page => page.classList.remove('active'));
  navButtons.forEach(btn => btn.classList.remove('active'));

  // Ativa a página correspondente
  const targetPage = document.getElementById(targetId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Ativa o botão correspondente no menu superior
  const activeBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  // Rola suavemente para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Adiciona evento de clique aos botões do menu
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    navigateTo(target);
  });
});

// Interatividade da Sala de Memórias
const memoryForm = document.getElementById('memory-form');
const memoriesWall = document.getElementById('memories-wall');

if (memoryForm) {
  memoryForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const author = document.getElementById('author-input').value.trim();
    const feeling = document.getElementById('feeling-select').value;
    const text = document.getElementById('memory-input').value.trim();

    if (author && text) {
      // Cria o novo card de memória
      const note = document.createElement('div');
      note.classList.add('memory-note');
      note.style.animation = 'fadeIn 0.5s ease forwards';

      note.innerHTML = `
        <span class="tag">${feeling}</span>
        <p>“${text}”</p>
        <small>— ${author}</small>
      `;

      // Adiciona no início do mural
      memoriesWall.prepend(note);

      // Limpa o formulário
      memoryForm.reset();
    }
  });
}