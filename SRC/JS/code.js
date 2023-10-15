let formulario;
let player;
let boton;

//Background
let main;
let salon;

//Elecciones
let imagenes;
let piedra;
let papel;
let tijeras;
let lagarto;
let spock;

//marcador
let marcador;
let playerScore = 0;
let enemyScore = 0;
let resultado ;

window.addEventListener("load", ()=>{
    elementAccess();
    listenerGroup();

})


function elementAccess (){
    formulario = document.getElementById('formulario');
    player = document.getElementById('player');
    boton = document.getElementById('boton');
    main = document.getElementById('main');

    boton.disabled = true;
    main.style.display = "none";

    salon = document.getElementById('salon');

    imagenes = document.getElementsByClassName('imagen'); //es una array de elementos.
    
    piedra = document.getElementById('piedra');
    papel = document.getElementById('papel');
    tijeras = document.getElementById('tijeras');
    lagarto = document.getElementById('lagarto');
    spock = document.getElementById('spock');

    //marcador
    marcador = document.getElementById('marcador');
    //resultado = document.getElementById('resultado');
    //playerScore = document.getElementById('playerScore');
    //enemyScore = document.getElementById('enemyScore');
    


}

//Función para los listener
function listenerGroup (){

    //activar el botón submit
    
    formulario.addEventListener("input", ()=>{
        if(player.value.trim() === ''){     //vacío
             boton.disabled = true;
        }else{
        boton.disabled = false;
        }
    });

    

    //Lsitener para comenzar el juego tras submit
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        
        startGame();
        
    });


    //Lsitener para el hoover de imágenes
    for(let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener("mouseover", ()=>{
        imagenes[i].style.transform = "scale(1.2)";
    });
    imagenes[i].addEventListener("mouseout", ()=>{
        imagenes[i].style.transform = "scale(1)";
    });
    }

    //Listener para la elección de lso jugadores.
    for(let i = 0; i< imagenes.length; i++ )
    imagenes[i].addEventListener("click", ()=>{
    //recojo el objeto return y lo igualo.
    let scoreResult = score(imagenes[i]);
    //actualizo el HTML con el return de los objetos.
    
    
    document.getElementById('playerScore').textContent = scoreResult.playerScore;
    document.getElementById('enemyScore').textContent = scoreResult.enemyScore;
    document.getElementById('resultado').textContent = scoreResult.resultado;

    eleccion(imagenes[i]);
    //eleccionRival();
         
    });

    //Listener para resetear el juego.
    formulario.addEventLsitener('reset', (event)=>{
        event.preventDefault(); //evita comportamiento pro defecto
        reset();
    })



}

//--------------funciones varias---------------------------------------------------------------

//Función para comenzar el juego y cambiar de pantalla.
function startGame(){

    reset();

    main.style.display = "flex";
    salon.style.display = 'none';
}



//Función que me da un número al azar, lo implemento en score.
function turnoRival(){
    return Math.floor(Math.random()*5);
}

//Función principal que determinará la elección de cada jugador.
function score(opcionJugador){ //opcion jugador = parámetro del score del listener, esta variable la igualo al de arriba.
    
    let resultado = "";
    let turno_rival = turnoRival();

    //elección del rival
    let eleccion = document.getElementById("eleccion_rival");
    eleccion.innerHTML = "";

  
    
    while(playerScore < 5 && enemyScore < 5){
    if(opcionJugador == tijeras && turno_rival == tijeras){ //Aquí igualo el número al azar, con la variable, que esta contenida en imagenes, en el DOM.
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!"; //tú ganas!
        
    }else if (opcionJugador== tijeras && turno_rival == 1){
        playerScore += 1;
        enemyScore += 0;
        resultado = "TIJERAS CORTAN PAPEL";
        eleccion.src = papel.src;
    }else if (opcionJugador == papel && turno_rival == 1){
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!";
        eleccion.src = papel.src;
    }else if (opcionJugador == papel && turno_rival == 0){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡PAPEL TAPA PIEDRA!";
        eleccion.src = piedra.src;
    }else if (opcionJugador == piedra && turno_rival == 0){
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!";
        eleccion.src = piedra.src;
    }else if (opcionJugador == piedra && turno_rival == 3){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡PIEDRA APLASTA LAGARTO!";
        eleccion.src = lagarto.src;
    }else if (opcionJugador == lagarto && turno_rival == 3){
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!";
        eleccion.src = lagarto.src;
    }else if (opcionJugador== lagarto && turno_rival == 4){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡LAGARTO ENVENENA A SPOCK!";
        eleccion.src = spock.src;
    }else if (opcionJugador == spock && turno_rival == 4){
            playerScore += 0;
            enemyScore += 0;
            resultado = "¡NEUTRALIZADOS!";
            eleccion.src = spock.src;
    }else if (opcionJugador == spock && turno_rival == 2){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡SPOCK ROMPE TIJERAS!";
        eleccion.src = tijeras.src;
    }else if (opcionJugador== tijeras && turno_rival == 3){
            playerScore += 1;
            enemyScore += 0;
            resultado = "¡TIJERAS DECAPITAN LAGARTO!";
            eleccion.src = lagarto.src;
    }else if (opcionJugador == lagarto && turno_rival == 1){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡LAGARTO DEVORA PAPEL!";
        eleccion.src = papel.src;
    }else if (opcionJugador == papel && turno_rival == 4){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡PAPEL DESAUTORIZA A SPOCK!";
        eleccion.src = spock.src;
    }else if (opcionJugador== spock && turno_rival == 0){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡SPOCK VAPORIZA PIEDRA!";
        eleccion.src = piedra.src;
    }else if (opcionJugador== piedra && turno_rival == 2){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡COMO SIEMPRE, PIEDRA APLASTA TIJERAS!";
        eleccion.src = tijeras.src;
    }else if (turno_rival == 2 && opcionJugador== papel){
        playerScore += 0;
        enemyScore += 1;
        resultado = "TIJERAS CORTAN PAPEL";
        eleccion.src = tijeras.src;
    }else if (turno_rival == 1 && opcionJugador == piedra){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡PAPEL TAPA PIEDRA!";
        eleccion.src = papel.src;
    }else if (turno_rival == 0 && opcionJugador == lagarto){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡PIEDRA APLASTA LAGARTO!";
        eleccion.src = piedra.src;
    }else if (turno_rival == 3 && opcionJugador== spock){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡LAGARTO ENVENENA A SPOCK!";
        eleccion.src = lagarto.src;
    }else if (turno_rival == 4 && opcionJugador == tijeras){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡SPOCK ROMPE TIJERAS!";
        eleccion.src = spock.src;
    }else if (turno_rival == 2 && opcionJugador == lagarto){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡TIJERAS DECAPITAN LAGARTO!";
        eleccion.src = tijeras.src;
    }else if (turno_rival == 3 && opcionJugador == papel){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡LAGARTO DEVORA PAPEL!";
        eleccion.src = lagarto.src;
    }else if (turno_rival == 1 && opcionJugador == spock){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡PAPEL DESAUTORIZA A SPOCK!";
        eleccion.src = papel.src;
    }else if (turno_rival == 4 && opcionJugador == piedra){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡SPOCK VAPORIZA PIEDRA!";
        eleccion.src = spock.src;
    }else if (turno_rival == 0 && opcionJugador == tijeras){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡COMO SIEMPRE, PIEDRA APLASTA TIJERAS!";
        eleccion.src = piedra.src;
    } 

    if(playerScore === 5){
        resultado = "¡Ganaste!"
    }else if(enemyScore === 5){
        resultado += " ¡Has perdido, ZAS en toda la boca!"

    }

    
    

    //retorno un objeto, con c/ resultado, para utilzarlo fuera.
    return {
        playerScore: playerScore,
        enemyScore: enemyScore,
        resultado: resultado
       };

}

}

//Función para mostar gráficamente la elección del jugador.
function eleccion(opcionJugador){
    let eleccionPlayer = document.getElementById("eleccion_player");
    eleccionPlayer.innerHTML = "";      //limpio su contenido antes de agregar la nueva imagen.
    
    if(opcionJugador == piedra){
        return eleccionPlayer.src = piedra.src;
    }else if (opcionJugador == papel){
        return  eleccionPlayer.src = papel.src;
    }else if (opcionJugador == tijeras){
        return  eleccionPlayer.src = tijeras.src;
    }else if (opcionJugador == lagarto){
        return  eleccionPlayer.src = lagarto.src;
    }else if (opcionJugador == spock){
        return  eleccionPlayer.src = spock.src;
    }
}

//Función para resetear: todo a 0.
function reset(){
    playerScore = 0;
    enemyScore = 0;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('enemyScore').textContent = enemyScore;

    document.getElementById('eleccion_player').innerHTML = ' ';
    document.getElementById('eleccion_rival').innerHTML = ' ';

    document.getElementById('resultado').textContent = ' ';

    main.style.display = 'none';
    salon.style.display = 'block';

    boton.disabled = true;
}




















