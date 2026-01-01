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

    // --- PRICING TOGGLE LOGIK ---

// Wir prüfen, ob wir überhaupt auf der Pricing Seite sind (damit es auf anderen Seiten keinen Fehler gibt)
    const billingToggle = document.getElementById('billing-toggle');

    if (billingToggle) {
        // Elemente holen, die wir verändern wollen
        const priceAmount = document.getElementById('price-amount');
        const billingInfo = document.getElementById('billing-info');

        // Event Listener: Wenn der Schalter geklickt wird
        billingToggle.addEventListener('change', function() {

            if (this.checked) {
                // ZUSTAND: JÄHRLICH (Switch ist an)
                // Wir ändern den Preis auf 7.99
                priceAmount.textContent = "7.99";
                // Wir ändern den Info-Text
                billingInfo.textContent = "95,88 € jährlich abgebucht (-20%)";

                // Animationseffekt (kurzes Aufblinken)
                priceAmount.style.opacity = 0;
                setTimeout(() => priceAmount.style.opacity = 1, 200);

            } else {
                // ZUSTAND: MONATLICH (Switch ist aus)
                priceAmount.textContent = "10.00";
                billingInfo.textContent = "Monatlich kündbar";

                priceAmount.style.opacity = 0;
                setTimeout(() => priceAmount.style.opacity = 1, 200);
            }
        });
    }

// --- MOCK KAUF-FUNKTIONEN (Für die Buttons) ---

    function startTrial() {
        // Simuliert den Start der Testphase
        alert("Yay! Dein Gratismonat ist aktiviert. Willkommen bei ChillPill!");
        // Weiterleitung (Mock)
        window.location.href = "index.html";
    }

    function buySubscription() {
        // Prüfen was gerade ausgewählt ist
        let period = "Monatsabo";
        let price = "10.00 €";

        if(billingToggle && billingToggle.checked) {
            period = "Jahresabo";
            price = "95.88 €";
        }

        // Mock Bestätigung
        const confirmed = confirm(`Möchtest du das ${period} für ${price} kaufen?`);

        if (confirmed) {
            alert("Zahlung erfolgreich! Danke für deinen Support.");
            // Hier könnte man den Nutzer zur "Danke" Seite leiten
        }
    }

});