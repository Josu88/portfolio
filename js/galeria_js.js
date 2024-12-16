/*jshint esversion: 6 */
/* JavaScript para la galeria de imagenes del index */

//Creamos la variables que usaremos y las inicializamos
let currentIndex = 0;

//Selecionamos los botones del dom de la galeria
document.querySelector('.prev-button').addEventListener('click', () => {
    navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
    navigate(1);
});

//Funcion para que al pulsar los botones cambie de imagen
function navigate(direction) {
    const galleryContainer = document.querySelector('.gallery-container');
    const totalImages = document.querySelectorAll('.gallery-item').length;
    
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    
    galleryContainer.style.transform = `translateX(${offset}%)`;
}

//AUTOPLAY
let autoplayInterval = null;

function startAutoplay(interval) {
    stopAutoplay();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval = setInterval(() => {
        navigate(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

//Funcion para parar el avance automatico de las imagenes
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(3000);

// Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
});
