    let order = [];
    let playerOrder = [];
    let flash;
    let compTurn;
    let good; 
    let score;
    let win;
    let intervalId;
    let start = false;
    let colors = [];
    let on = false;

    let scoreCounter = document.querySelector(".score");
    const topRight = document.querySelector(".top-right");
    const bottomRight = document.querySelector(".bottom-right");
    const bottomLeft = document.querySelector(".bottom-left");
    const topLeft = document.querySelector(".top-left");
    let startButton = document.querySelector("#start");
    let disableButton = document.querySelector('#on')
    let powerStyle = document.getElementById('on').style;
    let startStyle = document.getElementById('start').style;
    const buttonState = document.querySelector('#test')
    
// Power on
function powerOnOffButton () {
    if (powerStyle.backgroundColor === "var(--red)") {
        powerStyle.backgroundColor = "var(--green)";
        scoreCounter.innerHTML = "-";
        startStyle.backgroundColor = "white";
    } else {
        powerStyle.backgroundColor = "var(--red)";
        scoreCounter.innerHTML = "";
        startStyle.backgroundColor = "black";
        clearColor();
        clearInterval(intervalId);
        // resets the score
    }
}
document.getElementById('on').addEventListener('click', powerOnOffButton);

// StartButton
startButton.addEventListener('click', () => {
    if (on || win) {
        play();
    }
});

function play () {
    win = false;
    order = [];
    playOrder = [];
    flash = [];
    intervalId = 0;
    score = 1;
    scoreCounter.innerHTML = 1;
    good = true;
    for (let i = 0; i < 15; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    // setinterval repeats the interval untill its over
    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
    on = false;
    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColors();
        on = true;
    }
    if (compTurn) {
        clearColor();
        //
        setTimeout(() => {
            //if the first item in the array is one
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200);
    }
}

function one() {
    if (noise) {
        var audio = document.querySelector("");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "pink"
}

function clearColor() {
    topLeft.style.backgroundColor = "gray"
}

//$(document).ready(function(){
  //$(".toggle").click(function(){
    //$(this).toggleClass("opacity"); 
  //});
//});


// start button will glow when the power button is green


    // Starts the game and the computer will blink one random color
    // function StartGame () {
        // if ()

            


        // clicking start will couse blue to get 50% opacity after 500ms
        //document.getElementById('start').addEventListener('click', StartGame);
    //}

    // test code
    //setTimeout(() => {  }, 2000);
    //after this blue will flash for 500ms



    // creating a for loop to push 15 randoms number between 1 and 4 to the console

    //let currentTry = 1;
