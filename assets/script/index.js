const header = document.getElementById('header')
const disponivel = document.getElementById('disponivel');
const circle = document.getElementById('circle')
const circleSmall = document.getElementById('circle-small')
const btnContato = document.getElementById('btn-contato')

const burger = document.getElementById('burger')
const navContainer = document.getElementById('nav-container')
const headerContainer = document.getElementById('header-container')

disponivel.addEventListener('mouseover', () => {
    disponivel.style.backgroundColor = '#32177d'
    circle.style.borderColor = '#0f0e0e';
    circleSmall.style.borderColor = '#0f0e0e';
    btnContato.style.background = '#0f0e0e';
})

disponivel.addEventListener('mouseleave', () => {
    disponivel.style.backgroundColor = 'transparent';
    circle.style.borderColor = '#32177d';
    circleSmall.style.borderColor = '#32177d';
    btnContato.style.background = '#32177d';
})

navContainer.addEventListener('click', activeMenu);

function activeMenu() {
    navContainer.classList.toggle('active');
    header.classList.toggle('active-header')
}