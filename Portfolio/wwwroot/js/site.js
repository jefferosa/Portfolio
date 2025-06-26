const iconMenu = document.getElementById('iconMenu');
const menuPort = document.querySelector('.Menu-Port');

iconMenu.addEventListener('click', () => {
    const isAberto = menuPort.classList.toggle('mostrar');

    // Alterna os ícones da porta
    iconMenu.className = isAberto
        ? 'fa-solid fa-door-open icone-menu botao-icone'
        : 'fa-solid fa-door-closed icone-menu botao-icone';
});