

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const LIZARD = "lizard";
const SPOCK = "spock";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let UserPoint = 0;
let PCPoint = 0;
let contenedorUserPoint = document.querySelector("#point-user");
let contenedorPCPoint = document.querySelector("#point-pc");
let finalMessage = document.querySelector("#message-final");

let isPlaying = false;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const lizardBtn = document.getElementById("lizard");
const spockBtn = document.getElementById("spock");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");
//PPP
let formulario = document.getElementById("formulario");
let player = document.getElementById("player");
let boton = document.getElementById("boton");
let main = document.getElementById("main");

/** 

boton.disabled = true;
main.style.display = "none";

formulario.addEventListener("input", ()=>{
    if(player.value.trim() === ''){     //vacío
         boton.disabled = true;
    }else{
    boton.disabled = false;
    }
});
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    
    startGame();
    
});

function startGame(){

    reset();

    main.style.display = "flex";
    salon.style.display = 'none';
}
//LLLLL
**/
rockBtn.addEventListener("click", () => {
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});
lizardBtn.addEventListener("click", () => {
    play(LIZARD);
});
spockBtn.addEventListener("click", () => {
    play(SPOCK);
});

function play(userOption) {
    if (isPlaying) return;

    isPlaying = true;

    userImg.src = "images/" + userOption + ".svg";

    resultText.innerHTML = "Chossing!";

    const interval = setInterval(function () {
        const machineOption = calcMachineOption();
        machineImg.src = "images/" + machineOption + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "images/" + machineOption + ".svg";

        switch (result) {
            case TIE:
                resultText.innerHTML = "You have tied!";
                break;
            case WIN:
                resultText.innerHTML = "You win!";
                UserPoint++;
                contenedorUserPoint.innerHTML = UserPoint;
                break;
            case LOST:
                resultText.innerHTML = "You lost!";
                PCPoint++;
                contenedorPCPoint.innerHTML = PCPoint;
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 5);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
        case 3:
            return LIZARD;
        case 4:
            return SPOCK;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return LOST;
        if (machineOption === SCISSORS) return WIN;
        if (machineOption === LIZARD) return WIN;
        if (machineOption === SPOCK) return LOST;

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return LOST;
        if (machineOption === ROCK) return WIN;
        if (machineOption === LIZARD) return LOST;
        if (machineOption === SPOCK) return WIN;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return LOST;
        if (machineOption === PAPER) return WIN;
        if (machineOption === LIZARD) return WIN;
        if (machineOption === SPOCK) return LOST;

    } else if (userOption === LIZARD) {

        if (machineOption === ROCK) return LOST;
        if (machineOption === PAPER) return WIN;
        if (machineOption === SCISSORS) return WIN;
        if (machineOption === SPOCK) return LOST;

    } else if (userOption === SPOCK) {

        if (machineOption === ROCK) return WIN;
        if (machineOption === PAPER) return LOST;
        if (machineOption === SCISSORS) return WIN;
        if (machineOption === LIZARD) return LOST;

    }
}
//

if (UserPoint === 3 || PCPoint === 3) {

    if (UserPoint === 3) {
        finalMessage.innerHTML = "¡Congratulations, you won the game!"
    }

    if (PCPoint === 3) {
        finalMessage.innerHTML = "¡I'm so sorry, you lost the game!!"
    }

}  