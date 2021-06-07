    order = []
    playOrder = []
    
    let scoreCounter = document.querySelector(".score");
    let topRight = document.querySelector(".top-right");
    let bottomRight = document.querySelector(".bottom-right");
    let bottomLeft = document.querySelector(".bottom-left");
    let topLeft = document.querySelector(".top-left");
    let startButton = document.querySelector(".start");
    let disableButton = document.querySelector('on')
    

    // Turns the game on
    function PowerOnOffButton () {
        let style = document.getElementById('on').style;
    if (style.backgroundColor === "red") {
        style.backgroundColor = "green";
        scoreCounter.innerHTML = "-";
        disableButton = false;
    } else {
        style.backgroundColor = "red";
        scoreCounter.innerHTML = "";
        disableButton = true;
    }
}


document.getElementById('on').addEventListener('click', PowerOnOffButton);

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


    for (let i = 0; i < 15; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }

    //let currentTry = 1;
    

$(document).ready(function(){
  $(".toggle").click(function(){
    $(this).toggleClass("opacity");
    
  });
});
