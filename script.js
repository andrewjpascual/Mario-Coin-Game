function moveLeft() {
    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -=100;
    if(left >= 0) {
        character.style.left = left + "px";
    }
    
}

function moveRight() {
    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left +=100;
    if(left < 300) {
        character.style.left = left + "px";
    }
}

document.addEventListener("keydown", event => {
    if(event.key === "ArrowLeft") {moveLeft();}
    if(event.key === "ArrowRight") {moveRight();}
})

var block = document.getElementById("block");
var character = document.getElementById("character");
var counter = 0;

var counterSpan = document.getElementById("counter");

block.addEventListener('animationiteration', () =>  {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
    counterSpan.innerHTML = "Points: ".concat(counter+1);
    counter++;
    

});

setInterval(function(){
    var characterLeft = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = 
    parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    

    if(characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
        alert("Game over. Score: " + counter);
        block.style.animation = "none";
        location.reload();
    }

}, 1);



document.getElementById("left").addEventListener("touchstart",moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);