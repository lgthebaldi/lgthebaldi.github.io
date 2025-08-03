// Espera o HTML ser completamente carregado antes de executar qualquer script
document.addEventListener('DOMContentLoaded', () => {

    // ===================================================
    // CÓDIGO DO TEMA DARK/LIGHT (QUE VOCÊ JÁ TINHA)
    // ===================================================
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });


    // ===================================================
    // NOSSO NOVO CÓDIGO PARA ROLAGEM SUAVE
    // ===================================================

    // 1. Seleciona TODOS os links <a> que estão dentro da navbar
    const navLinks = document.querySelectorAll('.navbar a');

    // 2. Para cada um desses links, adiciona o "espião" de clique
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            
            // 3. Impede o comportamento padrão de "pular" para a âncora
            event.preventDefault();

            // 4. Pega o valor do href do link que foi clicado (ex: "#projetos")
            const targetId = this.getAttribute('href');

            // 5. Encontra o elemento na página que corresponde ao ID do href
            const targetElement = document.querySelector(targetId);

            // 6. Se o elemento existir, rola a página suavemente até ele
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // A mágica acontece aqui!
                });
            }
        });
    });

});