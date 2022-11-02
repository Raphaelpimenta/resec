const btnMobile = document.getElementById('btn-mobile');

function ativarMenu(event){
    if (event.type === 'touchstart') {
        event.preventDefault()
    }
    const nav = document.querySelector('nav');
    nav.classList.toggle('ativa');
}

btnMobile.addEventListener('click', ativarMenu);
btnMobile.addEventListener('touchstart', ativarMenu);