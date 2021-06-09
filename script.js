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
    let noise = true;

    const scoreCounter = document.querySelector(".score");
    const topRight = document.querySelector(".top-right");
    const bottomRight = document.querySelector(".bottom-right");
    const bottomLeft = document.querySelector(".bottom-left");
    const topLeft = document.querySelector(".top-left");
    const startButton = document.querySelector("#start");
    const onButton = document.querySelector('#on')

onButton.addEventListener('click', () => {
    if (onButton.checked == true) {
        on = true;
        play();
    } 
    if (onButton.checked == false) {
        on = false;
        scoreCounter.innerHTML = "";
        clearColors();
        clearInterval(intervalId);
    }
});

function play () {
   win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  scoreCounter.innerHTML = 1;
  good = true;
  for (let i = 0; i < 15; i++) {
  order.push(Math.floor(Math.random() * 4) + 1);
  console.log(order);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false; //player will not be able to click any buttons.
    
  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColors();
    on = true;
  }

  if (compTurn) {
    clearColors();
      setTimeout(() => {
            if (order[flash] == 1) one(); //if the first item in the array is one
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200);
    }
}

function one() {
    if (noise) {
        let audio = document.getElementById("clip1");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "var(--flashgreen)";
}

function two() {
    if (noise) {
        let audio = document.getElementById("clip2");
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = "var(--flashred)";
}

function three() {
    if (noise) {
        let audio = document.getElementById("clip3");
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "var(--flashblue)";
}

function four() {
    if (noise) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "var(--flashyellow)";
}

function clearColors() {
    topLeft.style.backgroundColor = "var(--green)";
    topRight.style.backgroundColor = "var(--red)";
    bottomRight.style.backgroundColor = "var(--blue)";
    bottomLeft.style.backgroundColor = "var(--yellow)";
}

function flashColor() {
  topLeft.style.backgroundColor = "var(--flashgreen";
  topRight.style.backgroundColor = "var(--flashred";
  bottomLeft.style.backgroundColor = "var(--flashblue";
  bottomRight.style.backgroundColor = "var(--flashyellow";
}

topLeft.addEventListener('click', () => {
    if (on) {
        playerOrder.push(1);
        //check();
       one();
       if(!win) {
       setTimeout(() => {
           clearColors();
       }, 200)
       }
    }
})

// StartButton
/*startButton.addEventListener('click', () => {
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
        let audio = get.documentById("clip1");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = (--flashgreen);
}

function clearColor() {
    topLeft.style.backgroundColor = (--green);
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
    */