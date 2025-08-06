// =============================
// Libreria de funciones de eventos para mini proyecto
// =============================

// ejercicio 1: boton que cambia de texto
 const btn2 = document.getElementById("btnActivar");
 btn2.disabled = true;
 btn2.style.opacity = "0.5";

function manejarClicBoton(){
    const mensaje = document.getElementById("mensajeTexto");
    mensaje.textContent = "¡Boton clicado!";
}

// ejerccicio 2: caja que cambia de color al mouseover/mouseout
function cambiarColorAlEntrar(){
    this.style.backgroundColor = "orange";
}

function restaurarColorAlSalir(){
    this.style.backgroundColor = "lightblue";
}

//ejecicio 3: Mostrar tecla presionada en input
function mostrarTecla(envet){
    const texto = document.getElementById("teclaMostrada");
    texto.textContent = "Tecla " + envet.key ;   
}

// ejercicio 4: Contador con botones sumar y restar
let Contador = 0;

function sumar() {
    Contador++;
    document.getElementById("contador").textContent = Contador;
}

function restar() {
    Contador--;
    document.getElementById("contador").textContent = Contador;
}

// ejercicio 5: Doble click cambia el color de fondo de la seccion
function cambiarColorAlDobleClick(){
   const colores = ["#FFC107", "#03A9F4", "#4CAF50", "E91E63", "9C27B0"];
   const ramdomColor = colores[Math.floor(Math.random() * colores.length)];
   this.style.backgroundColor = ramdomColor;
}

// ejercicio 6: Validar si el texto es un email vlido 
function ValidarEmail( ){
    const input = document.getElementById("emailInput");
    const mensaje = document.getElementById("mensajeEmail");
    const valor = input.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(valor)) {
        mensaje.textContent = "Email valido";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Email invalido";
        mensaje.style.color = "red";
    }

}

let segundos = 0;
let intervalId = null;

function iniciarTemporizador() {
    if (!intervalId !== null) return; // evitar multiples intervalos
    intervalId = setInterval(() => {
        segundos++;
        document.getElementById("temporizador").textContent = `${segundos} segundos`;
    }, 1000);
}

// ejercicio 8: Boton desactivar  otro boton y activar otro
function desactivarBoton() {
    const btnDesactivado = document.getElementById("btnDesactivar");
    const btnDesactivar = document.getElementById("btnDesactivar");

    btnDesactivado.disabled = true;
    btnDesactivado.style.opacity = "0.5";

    btnDesactivar.disabled = true; 
    btnDesactivar.style.opacity = "0.5";

    btn2.disabled = false;
    btn2.style.opacity = "1";
}

function activarBoton() {
    const btnDesactivado = document.getElementById("btnDesactivado");
    const btnDesactivar = document.getElementById("btnActivar");

    btnDesactivado.disabled = false;
    btnDesactivado.style.opacity = "1";

    btnDesactivar.disabled = false; 
    btnDesactivar.style.opacity = "1";

    btn2.disabled = true;
    btn2.style.opacity = "0.5";
}

// ejercicio 9: Toggle: Mostrar/Ocutar caja
function toggleMostrarCaja() {
    const caja = document.getElementById("toggleCaja");
    if (caja.style.display === "none" || caja.style.display === "") {
        caja.style.display = "block";
    } else {
        caja.style.display = "none";
    } 
}

// ejercicio 10: Cambiar imagen al pasar mouse (hover)
function cambiarImagenMouseOver(){
    this.src = "img/imagen2.jpg";
}

function restaurarImagenMouseOut(){
    this.src = "img/imagen1.jpg";
}

// ejercicio 11: Mostrar mensaje al hacer scroll
let timeoutScroll;
function detetarScroll() {
    const mensaje = document.getElementById("mensajeScroll");
    masaje.style.display = "block";
    clearTimeout(timeoutScroll);
    timeoutScroll = setTimeout(() => {
        mensaje.style.display = "none";
    }, 1000);
}

// ejercicio 12: Focus y blur en input
function focusInput() {
    this.style.backgroundColor = "#3498db";
    this.style.backgroundColor = "#eaf5ff";
}

function blurInput() {
    this.style.backgroundColor = "#ccc";
    this.style.backgroundColor = "white";
}

// ejercicio 13: MostrarSeleccion con Select
function mostrarSeleccion() {
    const valor = this.value || "ninguno";
    document.getElementById("ColorSeleccionado").textContent = `Color seleccionado: ${valor}`;
}

// ejercicio 14: Mostrar tamaño de ventanas al cambiar tamaño
function mostrarTamañoVentana( ){
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    document.getElementById("tamanhoVentana").textContent = `Ancho x Altura: ancho x alto. ${ancho} x ${alto}`;
}

// ejercicio 15: validar formulario simpli 
function validarFormulario(){
    event.preventDefault();
    const inputnombre = document.getElementById("nombreForm");
    const mensaje = document.getElementById("mensajeForm");
    if (inputnombre.value.trim() === "") {
        mensaje.textContent = "por favor ingresa tu nombre";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Formulario no enviado";
        mensaje.style.color = "green";
    }
}

    // =================================
    // Asignacion de eventos al cargar la pagina 
    // =================================

    document.addEventListener("DOMContentLoaded", ()=> {
        // ejercicio 1: 
        const boton = document.getElementById("botonTexto").addEventListener("click", manejarClicBoton);

        // ejercicio 2
        const cajaColores = document.getElementById("cajaColores");
        cajaColores.addEventListener("mouseover", cambiarColorAlEntrar);
        cajaColores.addEventListener("mouseout", restaurarColorAlSalir);
    
        // ejercicio 3
        document.addEventListener("keydown", mostrarTecla);

        // ejercicio 4
        document.addEventListener("btnSumar").addEventListener("click", sumar);
        document.addEventListener("btnRestar").addEventListener("click", restar);
        
        // ejercicio 5
        document.getElementById("seccionDobleClick").addEventListener("dblclick", cambiarColorAlDobleClick);

        // ejercicio 6
        document.getElementById("emailInput").addEventListener("input", ValidarEmail);

        // ejercicio 7
        document.getElementById("iniciarTemporizador").addEventListener("click", iniciarTemporizador);
        
        // ejercicio 8
        document.getElementById("btnDesactivar").addEventListener("click", desactivarBoton);
        document.getElementById("btnActivar").addEventListener("click", activarBoton);
    
        // ejercicio 9
        document.getElementById("btnToggleCaja").addEventListener("click", toggleMostrarCaja);

        // ejercicio 10
        const imagenHover = document.getElementById("imagenHover").
        imagenHover.addEventListener("mouseover", cambiarImagenMouseOver);
        imagenHover.addEventListener("mouseout", restaurarImagenMouseOut);

        // ejercicio 11
        window.addEventListener("scroll", detetarScroll);

        // ejercicio 12
        const inputFocusBlur = document.getElementById("inputFocusBlur");
        inputFocusBlur.addEventListener("focus", focusInput);
        inputFocusBlur.addEventListener("blur", blurInput);

        // ejercicio 13
        document.getElementById("SelectColores").addEventListener("change", mostrarSeleccion);

        // ejercicio 14
        window.addEventListener("resize", mostrarTamañoVentana);

        // ejercicio 15
        document.getElementById("formularioSimple").addEventListener("submit", validarFormulario);
    });