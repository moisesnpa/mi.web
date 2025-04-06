// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Manejo del formulario de contacto
    const formularioContacto = document.getElementById('contactForm');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Aquí normalmente enviarías los datos a un servidor
            // Por ahora, solo mostraremos un mensaje de confirmación
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te contactaremos pronto.`);
            
            // Limpiar el formulario
            formularioContacto.reset();
        });
    }
    
    // Efecto de desplazamiento suave para los enlaces del menú
    const enlacesMenu = document.querySelectorAll('header nav a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            // Solo aplicar a enlaces internos que comienzan con #
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const destino = document.querySelector(this.getAttribute('href'));
                if (destino) {
                    window.scrollTo({
                        top: destino.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Cambiar estilo del encabezado al desplazarse
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '15px 50px';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '20px 50px';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });
    
    // Añadir la clase "animado" a los elementos cuando se vuelven visibles
    // Útil para animaciones al hacer scroll
    const elementosAnimados = document.querySelectorAll('.tarjeta, .servicio');
    
    function revisarVisibilidad() {
        const triggerBottom = window.innerHeight * 0.8;
        
        elementosAnimados.forEach(elemento => {
            const elementoTop = elemento.getBoundingClientRect().top;
            
            if (elementoTop < triggerBottom) {
                elemento.classList.add('animado');
            }
        });
    }
    
    window.addEventListener('scroll', revisarVisibilidad);
    revisarVisibilidad(); // Revisar al cargar la página
});

// Función para mostrar/ocultar el menú en dispositivos móviles
// Esta función se puede implementar cuando añadas un botón de menú móvil
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mostrar');
}