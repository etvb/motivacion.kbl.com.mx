//v1
/*
const quotes = [
    "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cree en ti mismo y todo será posible.",
    "El fracaso es solo la oportunidad de comenzar de nuevo con más inteligencia.",
    "No importa lo lento que vayas, mientras no te detengas.",
    "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
    "La única manera de hacer un gran trabajo es amar lo que haces.",
    "No busques los errores, busca un remedio.",
    "El optimismo es la fe que lleva al logro.",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor para continuar.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito."
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote-btn');

newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});
*/

//v2
const quotes = [
    "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cree en ti mismo y todo será posible.",
    "El fracaso es solo la oportunidad de comenzar de nuevo con más inteligencia.",
    "No importa lo lento que vayas, mientras no te detengas.",
    "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
    "La única manera de hacer un gran trabajo es amar lo que haces.",
    "No busques los errores, busca un remedio.",
    "El optimismo es la fe que lleva al logro.",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor para continuar.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Función para mostrar una frase aleatoria en la página al cargar
function showRandomQuote() {
    const quoteBox = document.getElementById('quote');
    quoteBox.textContent = getRandomQuote();
}

// Evento para el botón que genera una nueva frase aleatoria
document.getElementById('new-quote-btn').addEventListener('click', showRandomQuote);

// Mostrar una frase aleatoria cuando se carga la página
window.onload = showRandomQuote;
