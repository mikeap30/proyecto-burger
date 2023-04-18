
import Swal from 'sweetalert2'
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var opinion = document.getElementById("opinion").value;

    if (nombre == "") {
        alert("Por favor, introduce tu nombre.");
        return false;
    } else if (!/^[a-zA-Z\s]*$/.test(nombre)) {
        alert("Por favor, introduce solo letras en el campo de nombre.");
        return false;
    }

    if (correo == "") {
        alert("Por favor, introduce tu correo electrónico.");
        return false;
    } else if (!validarCorreo(correo)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }

    if (telefono == "") {
        alert("Por favor, introduce tu número de teléfono.");
        return false;
    } else if (!validarTelefono(telefono)) {
        alert("Por favor, introduce un número de teléfono válido (10 dígitos).");
        return false;
    }

    if (opinion == "") {
        alert("Por favor, escribe tu opinión.");
        return false;
    }
    alert("Mucisimas gracias por su colaboracion")
    document.getElementById("miFormulario").reset();
    return true;
    
    }

function validarCorreo(correo) {
    var expresionRegular = /\S+@\S+\.\S+/;
    return expresionRegular.test(correo);
}

function validarTelefono(telefono) {
    var expresionRegular = /^[0-9]{10}$/;
    return expresionRegular.test(telefono);
}


  
  