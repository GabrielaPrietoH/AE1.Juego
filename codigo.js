// Variables para el formulario

let nombre;
let name = /^\D+$/;
let instrucciones;
let formulario;

// Variables para el marcador

let puntosUsuario = 0;
let puntosPC = 0;
let cNombre;
let cPuntosUsuario;
let cPuntosPC;
let cEleccionUsuario;
let cEleccionPC;
let mensaje;
let cGanaPunto;

// Variables para la elección de armas

let elegirArma;
let botonesArmas;

function init(){

//iniciamos las variables

formulario = document.getElementById("formulario");
botonJugar= document.getElementById("btnJugar");
nombre = document.getElementById("textName");
cNombre = document.getElementById("jugador");
instrucciones = document.getElementById("instrucciones");
cPuntosUsuario = document.getElementById("puntos-usuario");
cPuntosPC = document.getElementById("puntos-pc");
mensaje = document.getElementById("mensaje");
cGanaPunto = document.getElementById("gana-punto");
elegirArma = document.getElementById("elegi-tu-arma");
botonesArmas = document.querySelectorAll(".arma");
cEleccionUsuario = document.getElementById("eleccion-usuario");
cEleccionPC = document.getElementById("eleccion-pc");

}



function events(){

   formulario.addEventListener('input',validarFormulario);
   botonJugar.disabled = true;
   botonJugar.addEventListener('click', turnos);
   

}

function validarFormulario(){

      if(nombre.value.trim() == ""){
         botonJugar.disabled = true;

    }else if(name.test(nombre.value)){
        cNombre.textContent = nombre.value;
            botonJugar.disabled = false;
            turnos();
        }
}

function turnos(){


        botonesArmas.forEach(boton =>{
        boton.addEventListener('click', iniciarTurno);
       
      
            for(let i = 0; i < botonesArmas.length; i++){
            botonesArmas[i].addEventListener("mouseover", ()=>{
            botonesArmas[i].style.transform = "scale(1.2)";
            });
            botonesArmas[i].addEventListener("mouseout", ()=>{
            botonesArmas[i].style.transform = "scale(1)";
            });
          }
        });
}


function iniciarTurno(e) {


    let eleccionPC = Math.floor(Math.random() * 5);
    let eleccionUsuario = e.target.id;
    

    // piedra => 0
    // papel => 1
    // tijera => 2
    // lagarto => 3
    // spock => 4

    if (eleccionPC === 0) {
        eleccionPC = "piedra";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel"
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera"
    } else if(eleccionPC === 3) {
        eleccionPC = "lagarto"
    } else if(eleccionPC === 4) {
        eleccionPC = "spock"
    }

 /*
1. tijera vence papel
2. papel vence piedra.
3. piedra vence lagarto.
4. lagarto vence spock.
5. spock vence tijeras.
6. tijeras vence lagarto.
7. lagarto vence papel.
8. papel vence spock.
9. espock vence piedra.
10. empate son iguales.
*/

    if (
        (eleccionUsuario === "tijera" && eleccionPC === "papel") ||
        (eleccionUsuario === "papel" && eleccionPC === "piedra") ||
        (eleccionUsuario === "piedra" && eleccionPC === "lagarto") ||
        (eleccionUsuario === "lagarto" && eleccionPC === "spock") ||
        (eleccionUsuario === "spock" && eleccionPC === "tijera") ||
        (eleccionUsuario === "tijera" && eleccionPC === "lagarto") ||
        (eleccionUsuario === "lagarto" && eleccionPC === "papel") ||
        (eleccionUsuario === "papel" && eleccionPC === "spock") ||
        (eleccionUsuario === "spock" && eleccionPC === "piedra")



    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "tijera" && eleccionUsuario === "papel") ||
        (eleccionPC === "papel" && eleccionUsuario === "piedra") ||
        (eleccionPC === "piedra" && eleccionUsuario === "lagarto") ||
        (eleccionPC === "lagarto" && eleccionUsuario === "spock") ||
        (eleccionPC === "spock" && eleccionUsuario === "tijera") ||
        (eleccionPC === "tijera" && eleccionUsuario === "lagarto") ||
        (eleccionPC === "lagarto" && eleccionUsuario === "papel") ||
        (eleccionPC === "papel" && eleccionUsuario === "spock") ||
        (eleccionPC === "spock" && eleccionUsuario === "piedra")

    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    cEleccionUsuario.innerText = eleccionUsuario;
    cEleccionPC.innerText = eleccionPC;

    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            instrucciones.innerText = " ¡Ganaste el juego! " + "¡Escribe tu nombre para empezar!"
        }

        if (puntosPC === 5) {
            instrucciones.innerText = " ¡El ordenador ganó el juego! " + "¡Escribe tu nombre para empezar!"
        }

        elegirArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        botonJugar.addEventListener('click', resetear);
    }


}

function ganaUsuario() {
    puntosUsuario++;
    cPuntosUsuario.innerText = puntosUsuario;
    cGanaPunto.innerText = "¡Punto para ti! "
}

function ganaPC() {
    puntosPC++;
    cPuntosPC.innerText = puntosPC;
    cGanaPunto.innerText = "¡Punto para el ordenador! "
}

function empate() {
    cGanaPunto.innerText = "¡Empate! "
}

function resetear() {
    puntosUsuario = 0;
    puntosPC = 0;
    
    elegirArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    cPuntosUsuario.innerText = puntosUsuario;
    cPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana."

}



window.addEventListener("load",()=>{

     init();
     events();

});