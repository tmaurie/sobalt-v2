/*===== MENU SHOW =====*/
const TOGGLE_CLASS = 'show'; // Constante pour la classe CSS

// Fonction pour ajouter ou retirer la classe qui gère la visibilité
const toggleNavVisibility = (navElement) => {
    navElement.classList.toggle(TOGGLE_CLASS);
};

// Fonction pour masquer le menu
const hideMenu = (navElement) => {
    if (navElement.classList.contains(TOGGLE_CLASS)) {
        navElement.classList.remove(TOGGLE_CLASS);
    }
};

// Fonction principale pour montrer/masquer le menu et gérer les clics extérieurs
const showMenu = (toggleId, navId) => {
    const toggleElement = document.getElementById(toggleId);
    const navElement = document.getElementById(navId);

    if (toggleElement && navElement) {
        // Gestion du clic sur le bouton de toggle
        toggleElement.addEventListener('click', (event) => {
            event.stopPropagation(); // Empêche la propagation vers le document
            toggleNavVisibility(navElement);
        });

        // Gestion du clic en dehors du menu
        document.addEventListener('click', (event) => {
            if (!navElement.contains(event.target) && event.target !== toggleElement) {
                hideMenu(navElement);
            }
        });
    }
};

// Appel de la fonction
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight && sectionsClass !== null) {
            sectionsClass.classList.add('active-link')
        } else if (sectionsClass !== null) {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data', {});
sr.reveal('.home__img', {delay: 400});

sr.reveal('.logo-container, .trust-text', {});
sr.reveal('.intro__content-text', {delay: 200});

// Sélectionnez l'élément nav
const nav = document.querySelector('.nav');

// Ajouter un écouteur d'événements sur le scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50 && window.innerWidth > 768) {
        nav.classList.add('nav-scroll'); // Ajoute la classe
    } else {
        nav.classList.remove('nav-scroll'); // Retire la classe
    }
});


const toggleTheme = () => {
    document.documentElement.classList.toggle("dark-theme");
};

document.getElementById("theme-button").addEventListener("click", toggleTheme);