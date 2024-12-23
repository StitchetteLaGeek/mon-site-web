// Fonction pour ouvrir/fermer le menu mobile
function toggleMenu() {
    const menu = document.getElementById('menuLinks');
    
    // Si le menu est ouvert, on le ferme
    if (menu.style.right === "0px") {
        menu.style.right = "-250px";  // Ferme le menu
    } else {
        menu.style.right = "0px";  // Ouvre le menu
    }
}
