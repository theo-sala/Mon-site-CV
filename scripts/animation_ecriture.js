const textElement = document.getElementById('titre_soft_skills')
const textToAnimate = 'Je suis...'
let index = 0

function animateText() {
    if (index < textToAnimate.length) {
        textElement.textContent += textToAnimate[index] 
        index++
        setTimeout(animateText, 300)    // ajuste delai et vitesse
    } else {
        // Optionnel : Ajoute une pause avant de continuer l'animation du curseur
        setTimeout(() => {
            //textElement.style.borderRight = 'none'; // Supprime le curseur après le texte affiché
        }, 2000); // Ajuste le délai de pause si nécessaire
    }
}

animateText();