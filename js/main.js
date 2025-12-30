// Warten, bis das HTML komplett geladen ist
document.addEventListener('DOMContentLoaded', function() {

    console.log("MindFlow App ist gestartet!");

    // --- COOKIE BANNER LOGIK ---

    // 1. Elemente aus dem HTML holen
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    // 2. Prüfen: Hat der Nutzer schon zugestimmt? (Im LocalStorage schauen)
    // Wir tun so, als ob wir das speichern würden.
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (!cookiesAccepted) {
        // Wenn noch nicht akzeptiert, Banner anzeigen
        // Wir ändern das CSS von "display: none" zu "display: block"
        cookieBanner.style.display = 'block';
    }

    // 3. Was passiert beim Klick auf "Akzeptieren"?
    acceptButton.addEventListener('click', function() {
        // Banner ausblenden
        cookieBanner.style.display = 'none';

        // Speichern, dass der Nutzer zugestimmt hat
        localStorage.setItem('cookiesAccepted', 'true');

        console.log("Cookies wurden akzeptiert.");
    });

});