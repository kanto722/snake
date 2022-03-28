const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "./assets/img/fon.png";

const food = new Image();
food.src = "./assets/img/food.png";

let box = 32;

let score = 0;

function drawGame() {
    ctx.drawImage(ground, 0, 0);
}

let game = setInterval(drawGame, 100);