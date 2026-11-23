// Adiciona interatividade para enviar memórias dinamicamente
const form = document.getElementById('new-memory-form');
const grid = document.getElementById('memory-grid');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('visitor-name').value.trim();
    const feeling = document.getElementById('visitor-feeling').value;
    const text = document.getElementById('visitor-text').value.trim();

    if (name && text) {
      // Cria o elemento visual do cartão
      const card = document.createElement('div');
      card.classList.add('memory-card');
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';
      card.style.transition = 'all 0.5s ease';

      card.innerHTML = `
        <span class="card-tag">${feeling}</span>
        <p>“${text}”</p>
        <small>— ${name}</small>
      `;

      // Insere no topo da grade
      grid.prepend(card);

      // Animação suave de entrada
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);

      // Limpa o formulário
      form.reset();
    }
  });
}

// Destaca o item do menu conforme a rolagem da página
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').includes(current)) {
      item.classList.add('active');
    }
  });
});