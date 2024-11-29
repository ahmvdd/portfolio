function buttonClickTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        left: "0%",
        ease: "Expo.easeInOut", // Le fond bleu apparaît
    });
    tl.to(".loading-screen", {
        duration: 1,
        left: "100%",
        ease: "Expo.easeInOut", // Le fond bleu disparaît
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" }); // Réinitialisation pour une nouvelle animation
}

$(document).ready(function () {
    // Applique l'animation au clic du bouton "read more"
    $(".button a").on("click", function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        buttonClickTransition(); // Lance l'animation
        setTimeout(() => {
            window.location.href = $(this).attr("href"); // Redirige après l'animation
        }, 2000); // Délai de 2 secondes pour laisser l'animation se jouer
    });
});



