    order = []
    playOrder = []
    
    let topRight = document.querySelector(".top-right");
    let bottomRight = document.querySelector(".bottom-right");
    let bottomLeft = document.querySelector(".bottom-left");
    let topLeft = document.querySelector(".top-left");
    let startButton = document.querySelector(".start");
    let scoreCounter = document.querySelector(".score");

    // Turns the game on
    function PowerOnOffButton () {
        let style = document.getElementById('on').style;
    if (style.backgroundColor === "red") {
        style.backgroundColor = "green";
        scoreCounter.innerHTML = "-";
    } else {
        style.backgroundColor = "red";
        scoreCounter.innerHTML = "";
    }
}
document.getElementById('on').addEventListener('click', PowerOnOffButton);

    // Starts the game and the computer will blink one random color
    function StartGame () {

    }