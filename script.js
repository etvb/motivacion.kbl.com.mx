const quotes = [
    "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cree en ti mismo y todo será posible.",
    "El fracaso es solo la oportunidad de comenzar de nuevo con más inteligencia.",
    "No importa lo lento que vayas, mientras no te detengas.",
    "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
    "La única manera de hacer un gran trabajo es amar lo que haces.",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor para continuar."
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote-btn');

newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});
