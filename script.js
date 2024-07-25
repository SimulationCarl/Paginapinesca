const images = [
	"http://www.aviationcorner.net/public/photos/0/8/avc_00628908.jpg",
	"http://www.aviationcorner.net/public/photos/8/7/avc_00610387.jpg", 
    "http://www.aviationcorner.net/public/photos/5/4/avc_00606354.jpg",
	"http://www.aviationcorner.net/public/photos/1/3/avc_00604913.jpg"
];

const sonidos = [
	"audios/150.opus",
	"audios/aamaricon.opus",
	"audios/Falacias.opus",
	"audios/Otto.opus"
];

// RandomIndex selecciona un número aleatorio (entre 0 y 1) y lo multiplica por la longitud del array de imágenes.
// Math.floor redondea el número hacia abajo al entero más cercano para que 0,88 se convierta en 0.
const randomImage = Math.floor(Math.random() * images.length);

// Selecciona el body del documento y le asigna la URL de la imagen aleatoria.
const body = document.querySelector("body");
body.style.backgroundImage = `url(${images[randomImage]})`;

const imagen = document.getElementById("pino");
imagen.addEventListener("click", () => {
	const randomAudio = Math.floor(Math.random() * sonidos.length);
	const audio = new Audio(sonidos[randomAudio]);
	audio.play();
});
