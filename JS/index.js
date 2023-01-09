//Game Variables & Constant
let direction = {x:0,y:0};
const foodsound = new Audio('food.mp3');
const gameoversound = new Audio('gameover.mp3');
const movesound = new Audio('move.mp3');
const musicsound = new Audio('music.mp3');
let speed = 2;
lastPaintTime = 0;

//Game Functions
function main(ctime)
{
    window.requestAnimationFrame(main);
    console.log(ctime);
    if((ctime-lastPaintTime)/1000 < 1/speed)
    return;
    lastPaintTime = ctime;
}

function gameEngine(){
    //Part 1:Updating the snake array & Food
    //Part 2: Render the snake and food
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColStart = e.x;
        

    }
    )
}


//Main logic
window.requestAnimationFrame(main);
