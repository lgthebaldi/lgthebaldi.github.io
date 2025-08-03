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

// ===================================================
    // NOSSO NOVO CÓDIGO PARA VALIDAÇÃO DO FORMULÁRIO
    // ===================================================

    // 1. Seleciona os elementos do formulário
    const contactForm = document.getElementById('contact-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const successMessage = document.getElementById('success-message');

    // 2. Adiciona um "espião" para o evento de 'submit' do formulário
    contactForm.addEventListener('submit', function(event) {
        // 3. Impede o comportamento padrão de recarregar a página
        event.preventDefault();

        // Limpa mensagens de erro e sucesso antigas
        clearErrors();
        successMessage.style.display = 'none';

        let isValid = true; // Começamos assumindo que o formulário é válido

        // 4. Validação do campo Nome
        if (nomeInput.value.trim() === '') {
            showError(nomeInput, 'O campo nome é obrigatório.');
            isValid = false;
        }

        // 5. Validação do campo E-mail
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'O campo e-mail é obrigatório.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, insira um e-mail válido.');
            isValid = false;
        }

        // 6. Validação do campo Mensagem
        if (mensagemInput.value.trim() === '') {
            showError(mensagemInput, 'O campo mensagem é obrigatório.');
            isValid = false;
        }

        // 7. Se tudo for válido, mostra a mensagem de sucesso
        if (isValid) {
            successMessage.textContent = 'Mensagem enviada com sucesso! (Simulação)';
            successMessage.style.display = 'block';
            contactForm.reset(); // Limpa o formulário
        }
    });

    // Função para mostrar a mensagem de erro
    function showError(inputElement, message) {
        const errorMessageElement = inputElement.nextElementSibling; // Pega o <p> logo após o input
        errorMessageElement.textContent = message;
        errorMessageElement.style.display = 'block';
    }

    // Função para limpar todas as mensagens de erro
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.textContent = '';
            msg.style.display = 'none';
        });
    }

    // Função para verificar se o e-mail tem um formato válido
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


});