// Fonction pour ouvrir la lightbox
function openLightbox(img) {
    var lightbox = document.getElementById("lightbox");
    var expandedImg = document.getElementById("expandedImg");

    // Met à jour l'image dans la lightbox
    expandedImg.src = img.src;

    // Affiche la lightbox
    lightbox.classList.add('active');
}

// Fonction pour fermer la lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");

    // Cache la lightbox
    lightbox.classList.remove('active');
}
