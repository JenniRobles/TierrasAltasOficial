
// INCIO MENU DROPDPWN
// Cuando el html este completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const chevrons = document.querySelectorAll('.fa-chevron-down');

    chevrons.forEach(function (chevron) {
        chevron.addEventListener('click', function (event) {
            event.stopPropagation();
            const dropdownMenu = this.closest('li').querySelector('.dropdown-menu ul');

            // Cerrar todos los menús desplegables abiertos
            document.querySelectorAll('.dropdown-menu ul').forEach(function (menu) {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });

            // Alternar el menú desplegable actual
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
});
// FINAL MENU DROPDPWN

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

document.addEventListener('DOMContentLoaded', function() {
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





