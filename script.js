// Archivo JavaScript para la interactividad del cuento
console.log('Script cargado correctamente');

// Objeto para manejar todos los sonidos del bosque
const forestSounds = {
    // Instancias de sonidos
    birds: new Howl({
        src: ['sounds/bird2.mp3'],
        loop: true,
        volume: 0.7,
        autoplay: false
    }),
    
    insects: new Howl({
        src: ['sounds/insect.mp3'],
        loop: true,
        volume: 0.4,
        autoplay: false
    }),
    
    wind: new Howl({
        src: ['sounds/viento-101603.mp3'],
        loop: true,
        volume: 0.3,
        autoplay: false
    }),
    
    frogs: new Howl({
        src: ['sounds/frogs1-26828.mp3'],
        loop: true,
        volume: 0.5,
        autoplay: false
    }),

    // Función para iniciar todos los sonidos
    startAll: function() {
        this.birds.play();
        this.insects.play();
        this.wind.play();
        this.frogs.play();
        console.log('Iniciando paisaje sonoro del bosque');
    },

    // Función para detener todos los sonidos
    stopAll: function() {
        this.birds.stop();
        this.insects.stop();
        this.wind.stop();
        this.frogs.stop();
        console.log('Deteniendo paisaje sonoro del bosque');
    }
};

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startSounds');
    const stopButton = document.getElementById('stopSounds');

    startButton.addEventListener('click', () => {
        forestSounds.startAll();
        startButton.disabled = true;
        stopButton.disabled = false;
    });

    stopButton.addEventListener('click', () => {
        forestSounds.stopAll();
        startButton.disabled = false;
        stopButton.disabled = true;
    });

    // Inicialmente, el botón de detener está deshabilitado
    stopButton.disabled = true;
    
    console.log('Controles de sonido inicializados');
    // Cuando el DOM esté cargado
    console.log('Aplicación del paisaje sonoro inicializada');
});
