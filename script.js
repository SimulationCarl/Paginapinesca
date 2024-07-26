const images = [
	"http://www.aviationcorner.net/public/photos/0/8/avc_00628908.jpg",
	"http://www.aviationcorner.net/public/photos/8/7/avc_00610387.jpg", 
    "http://www.aviationcorner.net/public/photos/5/4/avc_00606354.jpg",
	"http://www.aviationcorner.net/public/photos/1/3/avc_00604913.jpg",
	"http://www.aviationcorner.net/public/photos/6/4/avc_00541764.jpg",
	"http://www.aviationcorner.net/public/photos/9/4/avc_00541094.jpg", 
	"http://www.aviationcorner.net/public/photos/3/9/avc_00540439.jpg",
	"http://www.aviationcorner.net/public/photos/9/6/avc_00541896.jpg",
	"http://www.aviationcorner.net/public/photos/7/5/avc_00541875.jpg",
	"http://www.aviationcorner.net/public/photos/7/8/avc_00574978.jpg",
];

const sonidosPino = [
	"audiosPino/150.opus",
	"audiosPino/aamaricon.opus",
	"audiosPino/Falacias.opus",
	"audiosPino/Otto.opus"
];

const sonidosFoca = [
	"audiosFoca/..."
];

// RandomIndex selecciona un número aleatorio (entre 0 y 1) y lo multiplica por la longitud del array de imágenes.
// Math.floor redondea el número hacia abajo al entero más cercano para que 0,88 se convierta en 0.
const randomImage = Math.floor(Math.random() * images.length);

// Selecciona el body del documento y le asigna la URL de la imagen aleatoria.
const body = document.querySelector("body");
body.style.backgroundImage = `url(${images[randomImage]})`;

// Audios de pino
const imagenPino = document.getElementById("pino");
imagenPino.addEventListener("click", () => {
	const randomAudio = Math.floor(Math.random() * sonidosPino.length);
	const audio = new Audio(sonidosPino[randomAudio]);
	audio.play();
});

// Audios de foca
const imagenFoca = document.getElementById("foca");
imagenFoca.addEventListener("click", () => {
	const randomAudio = Math.floor(Math.random() * sonidosFoca.length);
	const audio = new Audio(sonidosFoca[randomAudio]);
	audio.play();
});
