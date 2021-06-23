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
    
    const startGame = document.getElementsByClassName("bubble");

    const talkBubble = document.querySelector(".textbubble");

    const righteye = document.getElementsByClassName("rightiris");
    const lefteye = document.getElementsByClassName("leftiris");
    
    const topRight = document.querySelector(".top-right");
    const right = document.querySelector(".right");
    const bottomRight = document.querySelector(".bottom-right");
    const bottomLeft = document.querySelector(".bottom-left");
    const left = document.querySelector(".left");
    const topLeft = document.querySelector(".top-left");
    const onButton = document.querySelector('#on');
    const ambianceButton = document.querySelector("#ambiance-on-off");
    const scoreCounter = document.querySelector(".score");

    /* Frogeye mousemovements */ 
    document.onmousemove = function () {
        let x = event.clientX * 100 / window.innerWidth + "%";
        let y = event.clientY * 100 / window.innerHeight + "%";

        for(let i = 0; i < 2; i++) {
            lefteye[i].style.left = x;
            lefteye[i].style.top = y;

            righteye[i].style.left = x;
            righteye[i].style.top = y;
        }
    }

ambianceButton.addEventListener('click', () => {
    if (ambianceButton.checked == true) {
    let ambiance = document.getElementById("ambiance");
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
        talkBubble.innerHTML = "Click on the <br>lily pad and jump<br> after me!";
        play();
    } 
    if (onButton.checked == false) {
        on = false;
        scoreCounter.innerHTML = "";
        talkBubble.innerHTML = "Welcome to<br>my Lily pad<br>game";
        clearColors();
        clearInterval(intervalId);
    }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  score = 1;
  scoreCounter.innerHTML = 1;
  good = true;
  for (let i = 0; i < 3; i++) {
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
    right.style.backgroundColor = "var(--forestgreen)";
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

function flashred() {
    topRight.style.backgroundColor = "var(--flashred)";
}

function flashforestgreen() {
    right.style.backgroundColor = "var(--flashforestgreen)";
}

function flashblue() {
    bottomRight.style.backgroundColor = "var(--flashblue)";
}

function flashyellow() {
    bottomLeft.style.backgroundColor = "var(--flashyellow)";
}

function flashpurple() {
    left.style.backgroundColor = "var(--flashpurple)";
}

function flashgreen() {
    topLeft.style.backgroundColor = "var(--flashforestgreen)";
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

  if (playerOrder.length == 10 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    scoreCounter.innerHTML = "OPS!";
    setTimeout(() => {
      scoreCounter.innerHTML = score;
      clearColors();
      play();
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
    clearColors();
    let yaaykids = document.getElementById("yaykids");
    yaaykids.play();
    talkBubble.innerHTML = "WOW!";
    scoreCounter.innerHTML = "WIN!";
    on = false;
    win = true;
    setTimeout(() => {
        flashred();
    }, 250);
    setTimeout(() => {
        flashforestgreen();
    }, 500);
    setTimeout(() => {
        flashblue();
    }, 750);
    setTimeout(() => {
        flashyellow();
    }, 1000);
    setTimeout(() => {
        flashpurple();
    }, 1250);
    setTimeout(() => {
        flashgreen();
    }, 1500);
    setTimeout(() => {
        clearColors()
        talkBubble.innerHTML = "Let's play again!";
    }, 2000);
    setTimeout(() => {
        flashColor()
    }, 2250);
    setTimeout(() => {
        clearColors()
    }, 2500);
    setTimeout(() => {
        flashColor()
    }, 2750);
    setTimeout(() => {
        clearColors()
    }, 3000);
    setTimeout(() => {
        flashColor()
    }, 3250);
    setTimeout(() => {
        clearColors()
        play()
    }, 3500);
}