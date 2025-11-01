const parallaxSections = document.querySelectorAll(".parallax-section");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  parallaxSections.forEach(section => {
    const inner = section.querySelector(".parallax-inner");
    if(inner) {
      inner.style.transform = `translateY(${scrollY * 0.03}px)`;
    }
  });
});



document.addEventListener("DOMContentLoaded", async () => {
    await loadFull(tsParticles);
    await tsParticles.load("particle-bg", { /* tu config */ });
  });
document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Header que se encoje al hacer scroll ---
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
        // --- Lógica del Menú Móvil ---
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const mainNav = document.querySelector('.main-nav');
    
        if (mobileNavToggle && mainNav) {
            mobileNavToggle.addEventListener('click', () => {
                // Alterna la clase 'active' en el menú de navegación para mostrarlo/ocultarlo
                mainNav.classList.toggle('active');
                
                // Alterna la clase 'active' en el botón para animar el icono
                mobileNavToggle.classList.toggle('active');
                
                // Bloquea/desbloquea el scroll del body
                if (mainNav.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });
    
            // Cierra el menú si se hace clic en un enlace
            const navLinks = document.querySelectorAll('.main-nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        mobileNavToggle.classList.remove('active'); // También quita la clase del botón
                        document.body.style.overflow = '';
                    }
                });
            });
        }
        
          
});
