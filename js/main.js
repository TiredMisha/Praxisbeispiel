function playJingle() {
    const audio = document.getElementById('chillpill-jingle');
    const logo = document.querySelector('.logo-icon');

    console.log("Jingle-Funktion aufgerufen"); // Test-Log

    if (audio) {
        audio.play().catch(e => console.error("Audio-Fehler:", e));

        if (logo) {
            logo.style.filter = "drop-shadow(0 0 20px #ffde59)";
            setTimeout(() => {
                logo.style.filter = "drop-shadow(0 0 8px rgba(255, 222, 89, 0.3))";
            }, 3000);
        }
    } else {
        console.error("Audio-Element 'chillpill-jingle' nicht gefunden!");
    }
}

function startTrial() {
    alert("Yay! Dein Gratismonat ist aktiviert. Willkommen bei ChillPill!");
    window.location.href = "index.html";
}

function buySubscription() {
    const billingToggle = document.getElementById('billing-toggle');
    let period = "Monatsabo";
    let price = "10.00 €";

    if (billingToggle && billingToggle.checked) {
        period = "Jahresabo";
        price = "95.88 €";
    }

    const confirmed = confirm(`Möchtest du das ${period} für ${price} kaufen?`);
    if (confirmed) {
        alert("Zahlung erfolgreich! Danke für deinen Support.");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("ChillPill App ist gestartet!");

    // COOKIE BANNER LOGIK
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    if (cookieBanner && acceptButton) {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            cookieBanner.style.display = 'block';
        }
        acceptButton.addEventListener('click', function () {
            cookieBanner.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }

    // PRICING TOGGLE LOGIK
    const billingToggle = document.getElementById('billing-toggle');
    if (billingToggle) {
        const priceAmount = document.getElementById('price-amount');
        const billingInfo = document.getElementById('billing-info');

        billingToggle.addEventListener('change', function () {
            if (this.checked) {
                priceAmount.textContent = "7.99";
                billingInfo.textContent = "95,88 € jährlich abgebucht (-20%)";
            } else {
                priceAmount.textContent = "10.00";
                billingInfo.textContent = "Monatlich kündbar";
            }
            priceAmount.style.opacity = 0;
            setTimeout(() => priceAmount.style.opacity = 1, 200);
        });
    }
});