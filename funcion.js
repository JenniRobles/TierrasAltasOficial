
// INCIO MENU DROPDPWN
document.addEventListener('DOMContentLoaded', function () {
    const chevrons = document.querySelectorAll('.fa-chevron-down');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuBar = document.querySelector('.menu-bar');

    chevrons.forEach(function (chevron) {
        chevron.addEventListener('click', function (event) {
            event.stopPropagation();
            const dropdownMenu = this.closest('li').querySelector('.dropdown-menu ul');

            document.querySelectorAll('.dropdown-menu ul').forEach(function (menu) {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });

            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });
    });

    document.addEventListener('click', function () {
        chevrons.forEach(function (chevron) {
            const dropdownMenu = chevron.closest('li').querySelector('.dropdown-menu ul');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });

    // Evento para el menú hamburguesa
    hamburgerMenu.addEventListener('click', function () {
        menuBar.classList.toggle('active');
    });
});
// FINAL MENU DROPDPWN

// Desplazamiento suave para el menú principal
document.querySelectorAll('.main-menu a, .hamburger-dropdown a, #inscribirse').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// INICIO DROPDPWN DIAS
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        // Alternar el contenido accordion
        accordionContent.style.maxHeight =
            accordionContent.style.maxHeight ? null : accordionContent.scrollHeight + 'px';

        // Cerrar el contenido accordion
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== accordionContent) {
                content.style.maxHeight = null;
            }
        });
    });
});
// FINAL DROPDPWN DIAS

document.addEventListener('DOMContentLoaded', function () {
    // Lógica del formulario principal
    const formElements = document.querySelectorAll('input[type="text"], input[type="date"], input[type="number"], input[type="email"], input[name="paquete"], input[type="checkbox"]');
    const submitButton = document.getElementById('Enviar');

    formElements.forEach(element => {
        element.addEventListener('input', validateForm);
    });

    function validateForm() {
        const isFormComplete = Array.from(formElements).every(el => {
            if (el.type === 'radio') {
                return document.querySelector('input[name="paquete"]:checked') !== null;
            } else if (el.type === 'checkbox') {
                return el.checked;
            } else {
                return el.value.trim() !== '';
            }
        });

        submitButton.disabled = !isFormComplete;
    }

    // Lógica para la sección FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    const faqInputContainer = document.querySelector('.faq-input-container');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const img = question.querySelector('img');

        question.addEventListener('click', () => {
            const isVisible = answer.style.display === 'block';

            // Ocultar todas las respuestas y eliminar la clase oculto
            faqItems.forEach(i => {
                i.querySelector('.faq-answer').style.display = 'none';
                i.querySelector('img').classList.remove('open');
                i.classList.remove('oculto');
            });

            // Mostrar u ocultar la respuesta seleccionada
            if (!isVisible) {
                answer.style.display = 'block';
                img.classList.add('open');
                faqItems.forEach(i => {
                    if (i !== item) i.classList.add('oculto');
                });
                faqInputContainer.classList.add('oculto');
            } else {
                faqInputContainer.classList.remove('oculto');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.back-to-top');

    // Mostrar la flecha cuando se haya desplazado 100px hacia abajo
    document.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Desplazamiento suave al hacer clic en la flecha
    backToTopButton.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#banner').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});



