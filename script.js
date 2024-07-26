// Array de imágenes para el fondo
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
	"http://www.aviationcorner.net/public/photos/7/8/avc_00574978.jpg"
];

// Array de audios de Pino
const sonidosPino = [
	"audiosPino/150.opus",
	"audiosPino/aamaricon.opus",
	"audiosPino/Falacias.opus",
	"audiosPino/Otto.opus"
];
const frases = ["Culpa de Otto",
	"Outitiou",
	"Mesto me cago en dios deja de mandar audios",
	"Falacias"];
// Array de audios de Foca
const sonidosFoca = [
	// Añade aquí los audios correspondientes para Foca
];

// Selección aleatoria de imagen de fondo
const randomImage = Math.floor(Math.random() * images.length);
const body = document.querySelector("body");
body.style.backgroundImage = `url(${images[randomImage]})`;

// Función para abrir una página aleatoria al hacer clic en la imagen de Mesto
function openRandomPage() {
	const pages = ["mesto.html", "https://www.mcdonalds.es"];
	const randomPage = pages[Math.floor(Math.random() * pages.length)];
	window.open(randomPage, "_blank");
}

// Reproducción de audio al hacer clic en la imagen de Pino
const imagenPino = document.getElementById("pino");
imagenPino.addEventListener("click", () => {
	const randomAudio = Math.floor(Math.random() * sonidosPino.length);
	const audio = new Audio(sonidosPino[randomAudio]);
	audio.play();
});

// Reproducción de audio al hacer clic en la imagen de Foca
const imagenFoca = document.getElementById("foca");
imagenFoca.addEventListener("click", () => {
	const randomAudio = Math.floor(Math.random() * sonidosFoca.length);
	const audio = new Audio(sonidosFoca[randomAudio]);
	audio.play();
});

// Mostrar mensaje al hacer clic en el fondo
function showMessage() {
	const randomfrase = Math.floor(Math.random() * frases.length);
	alert[randomfrase]



}


