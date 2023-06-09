

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


window.sr = ScrollReveal();
  sr.reveal('.masthead', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px'
  });

  window.sr = ScrollReveal();
  sr.reveal('#principal', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

  window.sr = ScrollReveal();
  sr.reveal('#uno', {
    duration: 3000,
    origin: 'letft',
    distance: '-100px'
  });
  window.sr = ScrollReveal();
  sr.reveal('#dos', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });
  window.sr = ScrollReveal();
  sr.reveal('#tres', {
    duration: 3000,
    origin: 'letft',
    distance: '-100px'
  });
  window.sr = ScrollReveal();
  sr.reveal('#cuatro', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });

  window.sr = ScrollReveal();
  sr.reveal('#team', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
  });

  window.sr = ScrollReveal();
  sr.reveal('#historia', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
  });