document.addEventListener('DOMContentLoaded', function () {
    // --- Credenciales de EmailJS ---
    const YOUR_PUBLIC_KEY = 'OcxKkSnIzuaoiGxGr';
    const YOUR_TEMPLATE_ID = 'template_baoucsy';
    const YOUR_SERVICE_ID = 'service_6f717rd';
    // --------------------------------------------------------------

    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('form-status-message');
    contactForm.appendChild(statusMessage);

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        statusMessage.textContent = 'Enviando mensaje...';
        statusMessage.className = 'form-status-message';

        console.log('Intentando enviar formulario con EmailJS...'); // Mensaje de depuración

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, this, YOUR_PUBLIC_KEY)
            .then(function (response) {
                // Éxito
                console.log('¡ÉXITO! Respuesta de EmailJS:', response.status, response.text);
                statusMessage.textContent = '¡Mensaje enviado con éxito! Gracias por contactarnos.';
                statusMessage.classList.add('success');
                contactForm.reset();
            }, function (error) {
                // Error
                console.error('FALLO al enviar el formulario. Error detallado:', error);
                statusMessage.textContent = 'Hubo un error al enviar el mensaje. Revisa la consola para más detalles.';
                statusMessage.classList.add('error');
            });
    });
});
