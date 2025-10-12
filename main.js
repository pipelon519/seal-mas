document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Activa el efecto después de 50px de scroll
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
