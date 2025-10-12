document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    // Si la página no tiene el botón, no hacemos nada.
    if (!themeToggle) {
        return;
    }

    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Esta función aplica el tema cambiando la clase del body y el icono del botón
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            body.classList.remove('dark-theme');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    };

    // --- ¡AQUÍ ESTÁ EL CAMBIO! ---
    // Ahora, si hay un tema guardado en el navegador del usuario, lo respetamos.
    // Si es un usuario nuevo (sin tema guardado), por defecto iniciamos en 'dark'.
    const initialTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(initialTheme);
    
    // El resto del código sigue igual: al hacer clic, cambiamos al tema opuesto
    themeToggle.addEventListener('click', () => {
        let newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
        applyTheme(newTheme);
        // Y guardamos la elección del usuario para su próxima visita
        localStorage.setItem('theme', newTheme);
    });
});

