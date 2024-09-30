// bouton github 1
const bouton_github_vente = document.getElementById('btn_github_vente');
bouton_github_vente.addEventListener('click', () => {
    window.open('https://github.com/theo-sala/Site-vente-auto', '_blank');
});

// bouton github 2
const bouton_github_iss = document.getElementById('btn_github_iss');
bouton_github_iss.addEventListener('click', () => {
    window.open('https://github.com/theo-sala/Site-ISS', '_blank');
});

// bouton github 3
const bouton_github_jeu = document.getElementById('btn_github_jeu');
bouton_github_jeu.addEventListener('click', () => {
    window.open('https://github.com/theo-sala/jeu-vid-o', '_blank');
});


// boutons pour faire défiller la page
const bouton_iss = document.getElementById('btnISS')
const cible_iss = document.querySelector('.div_iss > h1')
bouton_iss.addEventListener('click', () => {
    cible_iss.scrollIntoView({ behavior: 'smooth' });
})

const bouton_vente = document.getElementById('btnVente')
const cible_vente = document.querySelector('.div_vente > h1')
bouton_vente.addEventListener('click', () => {
    cible_vente.scrollIntoView({ behavior: 'smooth' });
})

const bouton_jeu = document.getElementById('btnJeu')
const cible_jeu = document.querySelector('.div_jeu > h1')
bouton_jeu.addEventListener('click', () => {
    cible_jeu.scrollIntoView({ behavior: 'smooth' });
})