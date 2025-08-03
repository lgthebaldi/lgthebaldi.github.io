// Espera o HTML ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Pega os elementos do HTML que vamos manipular
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // 2. Adiciona um "ouvinte de evento" ao botão. 
    // A função dentro dele será executada toda vez que o botão for clicado.
    themeToggleButton.addEventListener('click', () => {
        // 3. A mágica acontece aqui:
        // O método 'toggle' adiciona a classe 'dark-mode' ao body se ela não existir,
        // e remove se ela já existir.
        body.classList.toggle('dark-mode');
    });

});