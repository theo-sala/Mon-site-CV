// bouton mail
const bouton_mail = document.getElementById('btn_mail')
let mail_adress = 'theo.sala-naessens@imerir.com'
bouton_mail.addEventListener('click', () => {
    window.location.href = `mailto:${mail_adress}`;
})

// bouton linkedin
const bouton_linkedin = document.getElementById('btn_linkedin');
bouton_linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/th%C3%A9o-sala-naessens-769158290/', '_blank');
});

// bouton telephone
const bouton_tel = document.getElementById('btn_phone');
let editor = document.querySelector('.tel');

function rotateElement(element) {
    element.style.animation = 'none';  // Réinitialise l'animation
    element.offsetHeight;  // Force un reflow pour que le changement soit pris en compte
    element.style.animation = 'rotateAnimation 0.6s ease-in-out 3'; // Animation de 0.6s répétée 3 fois
}

bouton_tel.addEventListener('click', () => {
    const textToCopy = editor.textContent || editor.innerText; // Récupère le texte
    navigator.clipboard.writeText(textToCopy).then(() => {})
    rotateElement(bouton_tel);
});

// bouton téléchargement CV
document.getElementById("btn_cv").addEventListener("click", function() {
    const fichierUrl = "CV/CV.pdf";  // Chemin vers le fichier PDF
    const a = document.createElement("a");  // Crée un élément <a>
    a.href = fichierUrl;  // Définit l'URL du fichier
    a.download = "CV_theo.pdf";  // Définit le nom du fichier lors du téléchargement
    document.body.appendChild(a);  // Ajoute le lien au DOM temporairement
    a.click();  // Simule un clic pour déclencher le téléchargement
    document.body.removeChild(a);  // Retire le lien après le clic
});


// BOUTONS DE NAVIGATION

const bouton_apdm = document.getElementById('btn_APM')
const cible_apbm = document.querySelector('.titre_moi')
bouton_apdm.addEventListener('click', () => {
    cible_apbm.scrollIntoView({ behavior: 'smooth' });
})

const bouton_formations = document.getElementById('btn_formations')
const cible_formations = document.querySelector('.titre_formations')
bouton_formations.addEventListener('click', () => {
    cible_formations.scrollIntoView({ behavior: 'smooth' });
})

const bouton_page_projets = document.getElementById('btn_projets')
bouton_page_projets.addEventListener('click', () => {
    window.open("projets.html", "_blank");
})

const bouton_page_passions = document.getElementById('btn_passions')
bouton_page_passions.addEventListener('click', () => {
    window.open("passions.html", "_blank");
})