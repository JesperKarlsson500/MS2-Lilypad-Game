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
    const right = document.querySelector(".right");
    const bottomRight = document.querySelector(".bottom-right");
    const bottomLeft = document.querySelector(".bottom-left");
    const left = document.querySelector(".left");
    const topLeft = document.querySelector(".top-left");
    const startButton = document.querySelector("#start");
    const onButton = document.querySelector('#on');
    const ambianceButton = document.querySelector("#ambiance-on-off");

ambianceButton.addEventListener('click', () => {
    if (ambianceButton.checked == true) {
    let ambiance = document.getElementById("ambiance").loop = true;
        ambiance.play();
    }
    if (ambianceButton.checked == false) {
        ambiance.pause();
    }
});

onButton.addEventListener('click', () => {
    if (onButton.checked == true) {
        on = true;
        win = true;
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
  score = 1;
  scoreCounter.innerHTML = 1;
  good = true;
  for (let i = 0; i < 15; i++) {
  order.push(Math.floor(Math.random() * 6) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 1000);
}

function gameTurn() {
  //on = false; //player will not be able to click any buttons.
    
  if (flash == score) {
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
      if (order[flash] == 5) five();
      if (order[flash] == 6) six();
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
    topRight.style.backgroundColor = "var(--flashred)";
}

function two() {
    if (noise) {
        let audio = document.getElementById("clip2");
        audio.play();
    }
    noise = true;
    right.style.backgroundColor = "var(--flashforestgreen)";
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

function five() {
    if (noise) {
        let audio = document.getElementById("clip5");
        audio.play();
    }
    noise = true;
    left.style.backgroundColor = "var(--flashpurple)";
}

function six() {
    if (noise) {
        let audio = document.getElementById("clip6");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "var(--flashgreen)";
}

function clearColors() {
    topRight.style.backgroundColor = "var(--red)";
    right.style.backgroundColor = "var(--darkgreen)";
    bottomRight.style.backgroundColor = "var(--blue)";
    bottomLeft.style.backgroundColor = "var(--yellow)";
    left.style.backgroundColor = "var(--purple)";
    topLeft.style.backgroundColor = "var(--green)";
}

function flashColor() {
    topRight.style.backgroundColor = "var(--flashred)";
    right.style.backgroundColor = "var(--flashforestgreen)";
    bottomRight.style.backgroundColor = "var(--flashblue)";
    bottomLeft.style.backgroundColor = "var(--flashyellow)";
    left.style.backgroundColor = "var(--flashpurple)";
    topLeft.style.backgroundColor = "var(--flashgreen)";
}


topRight.addEventListener('click', () => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColors();
      }, 400)
    }
  }
})

right.addEventListener('click', () => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColors();
      }, 400)
    }
  }
})

bottomRight.addEventListener('click', () => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColors();
      }, 400)
    }
  }
})

bottomLeft.addEventListener('click', () => {
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColors();
      }, 400)
    }
  }
})

left.addEventListener('click', () => {
  if (on) {
    playerOrder.push(5);
    check();
    five();
    if(!win) {
      setTimeout(() => {
        clearColors();
      }, 400)
    }
  }
})

topLeft.addEventListener('click', () => {
  if (on) {
    playerOrder.push(6);
    check();
    six();
    if(!win) {
      setTimeout(() => {
        clearColors();
      }, 400)
    }
  }
})

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) 
    good = false;

  if (playerOrder.length == 15 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    scoreCounter.innerHTML = "OPS!"
    setTimeout(() => {
      scoreCounter.innerHTML = score;
      clearColors();
    }, 600);
    
    noise = false;
    
  }   
  if (score == playerOrder.length && good && !win) {
    score++;
    playerOrder = [];
    compTurn = true;
    flash =  0; 
    scoreCounter.innerHTML = score;
    intervalId = setInterval(gameTurn, 1000);
  }
}

function winGame() {
    flashColor();
    setTimeout(() => {
      clearColors();
    }, 200);
    flashColor();
    scoreCounter.innerHTML = "WIN!"
    on = false;
    win = true;
}

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