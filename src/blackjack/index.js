import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearImagenCarta } from "./usecases";

let deck = [];
const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"), 
    btnNuevo = document.querySelector("#btnNuevo");

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

const puntosHTML = document.querySelectorAll("small");

deck = crearDeck(tipos, especiales);


// Eventos
btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    divCartasJugador.append(crearImagenCarta(carta));

    if (puntosJugador > 21) {
        console.warn("Lo siento mucho, perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML, divCartasComputadora, deck);
    } else if (puntosJugador === 21) {
        console.warn("21, genial!");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML, divCartasComputadora, deck);
    }
});

btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador, puntosHTML, divCartasComputadora, deck);
});

btnNuevo.addEventListener("click", () => {
    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = "";
    divCartasJugador.innerHTML = "";

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});
