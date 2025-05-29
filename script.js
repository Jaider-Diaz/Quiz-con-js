let indice = 0;
let puntaje = 0;

const preguntaEl = document.getElementById('pregunta');
const opcionesEl = document.getElementById('opciones');
const resultadoEl = document.getElementById('resultado');
const btnSiguiente = document.getElementById('siguiente');
const btnReiniciar = document.getElementById('reiniciar');

const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Londres", "Madrid", "Barcelona", "Paris"],
        respuesta: "Paris"
    },
    {
        pregunta: "¿Qué lenguaje se usa en la web?",
        opciones: ["Java", "C#", "JavaScript", "Python"],
        respuesta: "JavaScript"
    }
];

function mostrarPregunta() {
    const actual = preguntas[indice];
    preguntaEl.textContent = actual.pregunta;
    opcionesEl.innerHTML = "";

    actual.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.addEventListener('click', () => verificarRespuesta(opcion));
        opcionesEl.appendChild(boton);
    });
}

// Si el usuario selecciona una opción, se evalúa y avanza automáticamente
function verificarRespuesta(seleccion) {
    const correcta = preguntas[indice].respuesta;
    if (seleccion === correcta) {
        puntaje++;
    }
    avanzarPregunta(); // avanza sin necesidad del botón
}

// Si el usuario hace clic en "Siguiente" sin responder
btnSiguiente.addEventListener("click", () => {
    avanzarPregunta(); // solo avanza, sin puntaje
});

function avanzarPregunta() {
    indice++;
    if (indice < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    preguntaEl.textContent = "¡Quiz terminado!";
    opcionesEl.innerHTML = "";
    resultadoEl.textContent = `Tu puntaje es: ${puntaje} de ${preguntas.length}`;
    btnSiguiente.style.display = "none";
    btnReiniciar.style.display = "inline-block"
}

// Inicia el quiz
mostrarPregunta();

function reiniciar(){
    indice = 0
    puntaje = 0 
    btnSiguiente.style.display = "inline-block"
    btnReiniciar.style.display = "none"
    resultadoEl.textContent = ""
    mostrarPregunta()
}

btnReiniciar.addEventListener('click', reiniciar)
