// Alternar tema claro/escuro. Sem escolha salva, segue o sistema (via CSS).
(function () {
  var raiz = document.documentElement;
  var botao = document.getElementById('tema');

  function lerSalvo() {
    try { return localStorage.getItem('tema'); } catch (e) { return null; }
  }
  function salvar(valor) {
    try { localStorage.setItem('tema', valor); } catch (e) { /* navegação privada: ignora */ }
  }
  function atual() {
    var salvo = raiz.getAttribute('data-theme');
    if (salvo) return salvo;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var salvo = lerSalvo();
  if (salvo === 'light' || salvo === 'dark') raiz.setAttribute('data-theme', salvo);

  if (botao) {
    botao.addEventListener('click', function () {
      var novo = atual() === 'dark' ? 'light' : 'dark';
      raiz.setAttribute('data-theme', novo);
      salvar(novo);
    });
  }
})();
