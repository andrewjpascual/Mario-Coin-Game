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
var coin = document.getElementById("coin");
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


var counted = 0;
coin.addEventListener('animationiteration', () => {
    coin.style.visibility = "visible";
    counted = 0;
    var random3 = Math.floor(Math.random() * 3);
    let left3 = (random3) * 100;
    coin.style.left = left3 + "px";
});


setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

    var coinLeft = parseInt(window.getComputedStyle(coin).getPropertyValue("left"));
    var coinTop = parseInt(window.getComputedStyle(coin).getPropertyValue("top"));
    if(characterLeft==coinLeft && coinTop<400 && coinTop>200 && counted==0){
        counter++;
        counterSpan.innerHTML = "Points: ".concat(counter+1);
        coin.style.visibility = "hidden";
        counted++;
    }

    var block1Left = parseInt(window.getComputedStyle(block1).getPropertyValue("left"));
    var block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
    var blocksTop = parseInt(window.getComputedStyle(blocks).getPropertyValue("top"));
    if((characterLeft==block1Left||characterLeft==block2Left+100) && blocksTop<500 && blocksTop>300) {
        alert("Game over. Score: " + counter);
        coin.style.animation = "none";
        blocks.style.animation = "none";
        location.reload();
    }

}, 10);



document.getElementById("left").addEventListener("touchstart",moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);