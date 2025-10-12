# Blueprint: Señal Más

## Visión General

Este proyecto es una página web de aterrizaje moderna, estética y profesional para “Señal Más”, una empresa ficticia de servicios de telecomunicaciones (televisión, internet, conectividad). El objetivo es crear una presencia online atractiva que comunique los valores de la marca: tecnología, confianza y cercanía con el cliente.

La página está diseñada para ser visualmente impactante, con un estilo tecnológico limpio, un toque futurista y humano, y animaciones sutiles que mejoran la experiencia de usuario. Es totalmente responsive y está construida siguiendo las mejores prácticas de desarrollo web moderno.

## Diseño y Estilo Implementado

### Paleta de Colores

*   **Azul Oscuro (`#0A1E3F`):** Color base principal para fondos, creando una atmósfera tecnológica y elegante.
*   **Aguamarina (`#00CFC1`):** Color de acento vibrante para elementos interactivos como botones, íconos y detalles visuales, aportando un toque de modernidad y energía.
*   **Blanco (`#FFFFFF`):** Usado para textos principales y fondos de secciones específicas para garantizar la legibilidad y crear contraste.

### Tipografía

*   **Poppins:** Fuente principal elegida por su versatilidad, legibilidad y estética moderna. Se utiliza en diferentes pesos (ligero, regular, semi-bold, bold) para crear una jerarquía visual clara.

### Estilo Visual y Componentes

*   **Fondo Animado:** Se implementa un canvas con partículas de luz (efecto bokeh) en tonos aguamarina y azul que se mueven suavemente. Esta animación crea una sensación de conectividad, dinamismo y profundidad.
*   **Header Fijo y Translúcido:** La barra de navegación permanece fija en la parte superior, con un fondo semi-transparente y un efecto `backdrop-filter` (blur) para integrarse elegantemente con el contenido que se desplaza por debajo.
*   **Botones (CTAs):** Los botones de llamado a la acción tienen un color aguamarina sólido, esquinas redondeadas y una sombra sutil que se intensifica al pasar el cursor (`hover`), creando un efecto de "brillo" y elevación.
*   **Tarjetas de Beneficios:** Las tarjetas tienen un fondo ligeramente transparente, bordes definidos con el color de acento y un efecto de elevación al hacer `hover`, animando su transformación para atraer la atención.
*   **Iconografía:** Se utilizan íconos de Font Awesome, estilizados para que coincidan con la paleta de colores y el diseño limpio del sitio.
*   **Sección "Nosotros":** Combina un fondo blanco limpio con un mapa estilizado de Colombia que tiene un efecto de "resplandor" para reforzar la identidad local de la empresa.
*   **Sombras y Degradados:** Se usan sombras suaves (`box-shadow` y `text-shadow`) para dar profundidad a los elementos y un sutil degradado en el fondo del canvas para una transición visual más fluida.

## Características y Funcionalidades

### Estructura de la Página

1.  **Header:** Contiene el logo de "Señal Más" y el menú de navegación con enlaces ancla (Inicio, Beneficios, Nosotros, Contacto).
2.  **Hero Section:** La sección principal de bienvenida con un titular impactante, un subtítulo descriptivo y el botón principal de llamado a la acción.
3.  **Sección de Beneficios:** Presenta las ventajas clave del servicio a través de cuatro tarjetas informativas con íconos y descripciones.
4.  **Sección "Nosotros":** Comunica el origen y el compromiso de la empresa, combinando texto con una imagen representativa.
5.  **Llamado a la Acción Final (CTA):** Una sección simple y directa para incitar al usuario a contactar a la empresa.
6.  **Footer:** Incluye información de copyright y enlaces a redes sociales.

### Interactividad y Animaciones (JavaScript y CSS)

*   **Fondo de Partículas en Canvas:** Un script en `main.js` genera y anima partículas en un elemento `<canvas>` para un fondo dinámico y atractivo.
*   **Navegación Activa:** El menú de navegación resalta automáticamente el enlace correspondiente a la sección que se está visualizando en la pantalla gracias al uso de `IntersectionObserver`.
*   **Animaciones de Scroll (`Scroll-triggered`):** Elementos como las tarjetas de beneficios y las secciones de contenido aparecen con una suave animación de `fadeIn` a medida que el usuario se desplaza por la página, también implementado con `IntersectionObserver`.
*   **Efectos Hover:** Transiciones suaves en CSS se aplican a botones, enlaces y tarjetas para proporcionar feedback visual al usuario.

### Diseño Adaptable (Responsive)

*   El layout está construido con `Flexbox` y `Grid` para asegurar que la página se vea y funcione correctamente en una amplia gama de dispositivos (móviles, tablets y ordenadores de escritorio).
*   Se utilizan `media queries` para ajustar tamaños de fuente, espaciados y la disposición de los elementos en pantallas más pequeñas.

## Plan de Implementación Actual

**Solicitud del Usuario:** Crear una página web completa para "Señal Más" con un diseño moderno, profesional y tecnológicamente avanzado, incluyendo secciones específicas, paleta de colores, tipografía y animaciones.

**Pasos Ejecutados:**

1.  **`index.html`:** Se ha creado la estructura semántica completa de la página, incluyendo todas las secciones solicitadas (Header, Hero, Beneficios, Nosotros, CTA Final, Footer).
    *   Se han enlazado la hoja de estilos `style.css`, el script `main.js` y la fuente "Poppins" desde Google Fonts.
    *   Se ha incluido un elemento `<canvas>` para el fondo animado.
2.  **`style.css`:** Se ha desarrollado la hoja de estilos con todo el diseño visual:
    *   Definición de variables CSS (`:root`) para la paleta de colores y la tipografía.
    *   Estilos para todas las secciones, siguiendo las directrices de diseño (fondos, colores, espaciados).
    *   Implementación de efectos `hover`, sombras, y el diseño de los componentes como tarjetas y botones.
    *   Inclusión de `media queries` para asegurar la responsividad en dispositivos móviles.
3.  **`main.js`:** Se ha creado el script para añadir interactividad y animaciones:
    *   Implementación de la animación del fondo de partículas en el canvas.
    *   Configuración del `IntersectionObserver` para la navegación activa y las animaciones de aparición de elementos al hacer scroll.