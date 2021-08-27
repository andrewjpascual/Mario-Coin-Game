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

var blocks = document.getElementById("blocks");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var character = document.getElementById("character");
var counter = 0;

var counterSpan = document.getElementById("counter");

blocks.addEventListener('animationiteration', () =>  {
    var random1 = Math.floor(Math.random() * 3);
    let left1 = random1 * 100;
    block1.style.left = left1 + "px";
    var random2 = Math.floor(Math.random() * 3);
    let left2 = (random2-1) * 100;
    block2.style.left = left2 + "px";
    counterSpan.innerHTML = "Points: ".concat(counter+1);
    counter++;
    

});

setInterval(function(){
    var characterLeft = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var block1Left = parseInt(window.getComputedStyle(block1).getPropertyValue("left"));
    var block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
    var blocksTop = parseInt(window.getComputedStyle(blocks).getPropertyValue("top"));
    if((characterLeft==block1Left||characterLeft==block2Left+100) && blocksTop<500 && blocksTop>300) {
        alert("Game over. Score: " + counter);
        blocks.style.animation = "none";
        location.reload();
    }

}, 10);



document.getElementById("left").addEventListener("touchstart",moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);