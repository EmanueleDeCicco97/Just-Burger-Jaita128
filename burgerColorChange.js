document.addEventListener("DOMContentLoaded", function() {
    // Seleziona le box dei panini
    const veganinoBox = document.getElementById('veganino-box');
    const boringBurgerBox = document.getElementById('boring-burger-box');
    const orangeVertigoBox = document.getElementById('orange-vertigo-box');

    // Seleziona la sezione banner e il logo
    const bannerSection = document.querySelector('.banner');
    const logoImg = document.getElementById('logo-img');

    // Funzione per cambiare il logo con transizione
    function changeLogo(logoSrc) {
        logoImg.style.opacity = '0';  // Rendi il logo trasparente
        setTimeout(function() {
            logoImg.src = logoSrc;  // Cambia il logo
            logoImg.style.opacity = '1';  // Riporta il logo visibile
        }, 300);  // Tempo che coincide con la durata della transizione (0.3s)
    }

    // Funzione per cambiare il logo e il colore del banner
    function changeBanner(logoSrc, bannerClass) {
        changeLogo(logoSrc);  // Cambia il logo con transizione
        bannerSection.className = 'banner ps-5 d-flex justify-content-start align-items-center w-100 ' + bannerClass;
    }

    // Verifica se ci sono dati salvati in localStorage
    const savedLogo = localStorage.getItem('selectedLogo');
    const savedBannerClass = localStorage.getItem('selectedBannerClass');

    // Se ci sono dati salvati, applica il logo e il colore
    if (savedLogo && savedBannerClass) {
        changeBanner(savedLogo, savedBannerClass);
    }

    // Event Listener per Veganino
    veganinoBox.addEventListener('click', function() {
        const logoSrc = 'Images/logo/logo-green.png';
        const bannerClass = 'bg-g';
        changeBanner(logoSrc, bannerClass);

        // Salva i valori in localStorage
        localStorage.setItem('selectedLogo', logoSrc);
        localStorage.setItem('selectedBannerClass', bannerClass);
    });

    // Event Listener per Boring Burger
    boringBurgerBox.addEventListener('click', function() {
        const logoSrc = 'Images/logo/logo-yellow.png';
        const bannerClass = 'bg-y';
        changeBanner(logoSrc, bannerClass);

        // Salva i valori in localStorage
        localStorage.setItem('selectedLogo', logoSrc);
        localStorage.setItem('selectedBannerClass', bannerClass);
    });

    // Event Listener per Orange Vertigo
    orangeVertigoBox.addEventListener('click', function() {
        const logoSrc = 'Images/logo/logo-orange.png';
        const bannerClass = 'bg-o';
        changeBanner(logoSrc, bannerClass);

        // Salva i valori in localStorage
        localStorage.setItem('selectedLogo', logoSrc);
        localStorage.setItem('selectedBannerClass', bannerClass);
    });
});
