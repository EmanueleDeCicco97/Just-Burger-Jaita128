document.addEventListener("DOMContentLoaded", function() {
    // Seleziona le box dei panini
    const veganinoBox = document.getElementById('veganino-box');
    const boringBurgerBox = document.getElementById('boring-burger-box');
    const orangeVertigoBox = document.getElementById('orange-vertigo-box');

    // Seleziona la sezione banner e il logo
    const bannerSection = document.querySelector('.banner');
    const logoImg = document.getElementById('logo-img');

    // Funzione per cambiare il logo con transizione
    function changeLogo(logoSrc, animate = true) {
        if (animate) {
            // Aggiungi l'effetto di scala al logo
            logoImg.classList.add('scale-up');

            setTimeout(function() {
                logoImg.src = logoSrc;  // Cambia il logo
            }, 150);  // Cambia il logo a metà della transizione

            setTimeout(function() {
                logoImg.classList.remove('scale-up');  // Rimuovi l'effetto di scala
            }, 300);  // Completa l'effetto di transizione
        } else {
            // Cambia il logo senza animazione
            logoImg.src = logoSrc;
        }
    }

    // Funzione per cambiare il logo e il colore del banner
    function changeBanner(logoSrc, bannerClass, animate = true) {
        changeLogo(logoSrc, animate);  // Cambia il logo con transizione
        bannerSection.className = 'banner ps-5 d-flex justify-content-start align-items-center w-100 ' + bannerClass;
    }

    // Verifica se ci sono dati salvati in localStorage
    const savedLogo = localStorage.getItem('selectedLogo');
    const savedBannerClass = localStorage.getItem('selectedBannerClass');

    // Se ci sono dati salvati, applica il logo e il colore senza animazione
    if (savedLogo && savedBannerClass) {
        changeBanner(savedLogo, savedBannerClass, false); // Disabilita l'animazione
    }

    // Event Listener per Veganino
    veganinoBox.addEventListener('click', function() {
        const logoSrc = 'Images/logo/logo-green.png';
        const bannerClass = 'bg-g';
        changeBanner(logoSrc, bannerClass); // Usa l'animazione di default

        // Salva i valori in localStorage
        localStorage.setItem('selectedLogo', logoSrc);
        localStorage.setItem('selectedBannerClass', bannerClass);
    });

    // Event Listener per Boring Burger
    boringBurgerBox.addEventListener('click', function() {
        const logoSrc = 'Images/logo/logo-yellow.png';
        const bannerClass = 'bg-y';
        changeBanner(logoSrc, bannerClass); // Usa l'animazione di default

        // Salva i valori in localStorage
        localStorage.setItem('selectedLogo', logoSrc);
        localStorage.setItem('selectedBannerClass', bannerClass);
    });

    // Event Listener per Orange Vertigo
    orangeVertigoBox.addEventListener('click', function() {
        const logoSrc = 'Images/logo/logo-orange.png';
        const bannerClass = 'bg-o';
        changeBanner(logoSrc, bannerClass); // Usa l'animazione di default

        // Salva i valori in localStorage
        localStorage.setItem('selectedLogo', logoSrc);
        localStorage.setItem('selectedBannerClass', bannerClass);
    });
});
