


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menuMobile = document.getElementById('menu-mobile');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Função para abrir o menu
    function openMenu() {
        menuMobile.classList.remove('hidden');
    }

    // Função para fechar o menu
    function closeMenu() {
        menuMobile.classList.add('hidden');
    }

    // Evento para abrir o menu
    menuToggle.addEventListener('click', openMenu);

    // Evento para fechar o menu ao clicar no botão de fechar
    menuClose.addEventListener('click', closeMenu);

    // Evento para fechar o menu ao clicar em qualquer link dentro do menu mobile
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

        