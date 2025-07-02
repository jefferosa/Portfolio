const iconMenu = document.getElementById('iconMenu');
const menuPort = document.querySelector('.Menu-Port');

iconMenu.addEventListener('click', () => {
    const isAberto = menuPort.classList.toggle('mostrar');

    iconMenu.className = isAberto
        ? 'fa-solid fa-xmark botao-icone menu-ativo'
        : 'fa-solid fa-bars botao-icone';

    if (isAberto) {
        menuPort.classList.add('menu-animado');
    } else {
        menuPort.classList.remove('menu-animado');
    }
});

// Ajuste visual do layout para manter lado a lado
function ajustarLayout() {
    const container = document.querySelector('.container-apresentacao');
    if (window.innerWidth > 768) {
        container.style.flexDirection = 'row';
    } else {
        container.style.flexDirection = 'column';
    }
}

window.addEventListener('load', ajustarLayout);
window.addEventListener('resize', ajustarLayout);
