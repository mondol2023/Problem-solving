let blockSize = 25;
let total_rows = 20;
let total_cols = 20;
let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let speedX = 0;
let speedY = 0;

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;

window.onload = function () {
    board = document.getElementById("board");
    board.height = total_rows * blockSize;
    board.width = total_cols * blockSize;

    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection);

    setInterval(PaymentRequestUpdateEvent, 1000/10);
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle = "green";
    context.fillRect(foodX,foodY , blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY)  {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for(let i = snakeBody.length - 1 ; i>0; i++) {
        snakeBody[i] = snakeBody[i-1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "white";
    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;


    context.fillRect(snakeX,snakeY , blockSize, blockSize);

    for (let i = 0; i < snakeBody.length; i++)  {
        context.fillRect(snakeBody[i][0], snakeBody[i][1] , blockSize, blockSize);
    }

    if(snakeX < 0 || snakeX > total_cols * blockSize || snakeY < 0 || snakeY > total_rows * blockSize) 
    {
        gameOver = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++)  {
        
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) 
        {
            gameOver = true;
            alert("Game Over");
        }
    }
}

function changeDirection (e) {
    if (e.code == "ArrowUp"&& speedY != 1) {
        speedX = 0;
        speedY = -1;
    }
    else if (e.code == "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
    }
    else if (e.code == "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
}

//food placing randomly
function placeFood() {
    foodX = Math.floor(Math.random() * total_cols) * blockSize;

    foodY = Math.floor(Math.random() * total_rows) * blockSize;
}