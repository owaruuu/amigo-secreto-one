// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const elementoNuevoAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    const nuevoAmigo = elementoNuevoAmigo.value;

    if (nuevoAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nuevoAmigo);
    elementoNuevoAmigo.value = "";
    elementoNuevoAmigo.focus();
    actualizarLista();
}

function actualizarLista() {
    resultado.innerHTML = "";
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        createSimple("li", listaAmigos, amigo);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        return alert("Por favor, agrege amigos primero.");
    }

    const numeroAleatorio = intAleatorio(amigos.length);
    const amigoSorteado = amigos[numeroAleatorio];

    resultado.innerHTML = "";
    listaAmigos.innerHTML = "";
    amigos = [];

    createSimple(
        "li",
        resultado,
        `El amigo secreto sorteado es: ${amigoSorteado}`
    );
}

function intAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function createSimple(type, parent, content) {
    const element = document.createElement(type);
    parent.appendChild(element);
    element.innerHTML = content;
    return element;
}
