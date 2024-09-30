const bouton_car = document.getElementById('btnCar')
const cible_car = document.querySelector('.div_auto > h1')
bouton_car.addEventListener('click', () => {
    cible_car.scrollIntoView({ behavior: 'smooth' });
})

const bouton_carte = document.getElementById('btnCard')
const cible_carte = document.querySelector('.div_magic > h1')
bouton_carte.addEventListener('click', () => {
    cible_carte.scrollIntoView({ behavior: 'smooth' });
})