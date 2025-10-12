document.addEventListener('DOMContentLoaded', function () {
    // --- Credenciales de EmailJS ---
    const YOUR_PUBLIC_KEY = 'OcxKkSnIzuaoiGxGr';
    const YOUR_SERVICE_ID = 'service_6f717rd';

    // IDs de las plantillas para cada formulario
    const CONTACT_TEMPLATE_ID = 'template_baoucsy';
    const SUBSCRIBE_TEMPLATE_ID = 'TU_NUEVO_TEMPLATE_ID_DE_SUSCRIPCION'; // <-- ¡REEMPLAZA ESTO!
    // --------------------------------------------------------------

    // --- Lógica para el Formulario de Contacto ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('form-status-message');
        contactForm.appendChild(statusMessage);

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            statusMessage.textContent = 'Enviando mensaje...';
            statusMessage.className = 'form-status-message';

            emailjs.sendForm(YOUR_SERVICE_ID, CONTACT_TEMPLATE_ID, this, YOUR_PUBLIC_KEY)
                .then(function (response) {
                    console.log('CONTACTO ÉXITO!', response.status, response.text);
                    statusMessage.textContent = '¡Mensaje enviado con éxito! Gracias por contactarnos.';
                    statusMessage.classList.add('success');
                    contactForm.reset();
                }, function (error) {
                    console.error('CONTACTO FALLO:', error);
                    statusMessage.textContent = 'Hubo un error al enviar. Revisa la consola.';
                    statusMessage.classList.add('error');
                });
        });
    }

    // --- Lógica para el Formulario de Suscripción del Footer ---
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('subscribe-status-message');
        // Insertamos el mensaje después del formulario, no dentro.
        subscribeForm.parentNode.insertBefore(statusMessage, subscribeForm.nextSibling);

        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Validamos que el email no esté vacío
            const emailInput = subscribeForm.querySelector('input[name="subscriber_email"]');
            if (!emailInput.value) {
                statusMessage.textContent = 'Por favor, ingresa un correo.';
                statusMessage.className = 'subscribe-status-message error';
                return;
            }

            statusMessage.textContent = 'Procesando...';
            statusMessage.className = 'subscribe-status-message';

            emailjs.sendForm(YOUR_SERVICE_ID, SUBSCRIBE_TEMPLATE_ID, this, YOUR_PUBLIC_KEY)
                .then(function(response) {
                    console.log('SUSCRIPCIÓN ÉXITO!', response.status, response.text);
                    statusMessage.textContent = '¡Gracias por suscribirte!';
                    statusMessage.classList.add('success');
                    subscribeForm.reset();
                }, function(error) {
                    console.error('SUSCRIPCIÓN FALLO:', error);
                    statusMessage.textContent = 'Error al suscribir. Intenta de nuevo.';
                    statusMessage.classList.add('error');
                });
        });
    }
});
