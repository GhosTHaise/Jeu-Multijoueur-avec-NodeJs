"use strict"
const cvs = document.getElementById('MainCanvas');
const ctx = cvs.getContext('2d');

//initialiser le grid
const WIDTH = cvs.width/2,
      HEIGHT = cvs.height/2,
      //change NOMBRE_GRID if you want it bigger
      NOMBRE_GRID = 5000,
      GRID_SIZE = Math.sqrt(((WIDTH*HEIGHT)/NOMBRE_GRID));
//alert("width : "+WIDTH+" | height : "+HEIGHT+" | grid_size : "+GRID_SIZE);
ctx.scale(2,2);
//Snake 
var newDirection;
var direction = newDirection = 1,
    snakeLength = 305,
    snake = [{x : WIDTH/2,y : HEIGHT/2}],
    food = null,
    end = false,
    score = 0;

//fonction

//Position Aleatoire pour food
const randomFood = () => {
    var foodPosition = {};
    return  foodPosition = {x : Math.floor(Math.random() * WIDTH / GRID_SIZE) * GRID_SIZE,
                            y : Math.floor(Math.random() * HEIGHT / GRID_SIZE ) * GRID_SIZE
                        }   
}
//Convertir les coordonnees en String
const coordToString = (obj) => {
    return [obj.x,obj.y].join(',');
}

const tick = (_frame) => {
    var snakePart = {x : snake[0].x,y : snake[0].y};
    if(Math.abs(direction) !== Math.abs(newDirection)){
        direction = newDirection;
    }
    var axis = (Math.abs(direction) === 1) ? 'x' : 'y';
    if(direction < 0 ){
        snakePart[axis] -= GRID_SIZE;
    }else{
        snakePart[axis] += GRID_SIZE;
    }
    if(food && food.x === snakePart.x && food.y === snakePart.y){
        food = null;
        snakeLength += 2;
        score ++;
    };
ctx.fillStyle = "#22424a";
ctx.fillRect(0,0,WIDTH,HEIGHT);
//game over
if(end){
    ctx.fillStyle = "#e8dbb0";
    ctx.font = "1rem Monospace";
    ctx.textAlign = "center";
    ctx.fillText("Game Over  - Score : "+score,WIDTH/2,HEIGHT /2);
    ctx.fillText("SPACE to Continue",WIDTH / 2,(HEIGHT /2)+75);
    
    if(newDirection == 5){
        location.reload();
    }
    clearInterval(_frame);
}else{
    snake.unshift(snakePart);
    snake = snake.slice(0,snakeLength);
    ctx.fillStyle = "#e8dbb0";
    ctx.font = "0.6rem Monospace";
    ctx.fillText("Score : "+score.toString(10),5,20);
}
if(snakePart.x < 0 || snakePart.x > WIDTH || snakePart.y < 0 || snakePart.y > HEIGHT){
    end = true;
}
//draw the snake
ctx.fillStyle = "#15b31b";
var i =0,
    snakeObj = {};
for(let snakeBody of snake){
    ctx.fillRect(snakeBody.x,snakeBody.y,GRID_SIZE-1,GRID_SIZE -1);
    if(i > 0) snakeObj[coordToString(snakeBody)] = true;
    i++;
}
if(snakeObj[coordToString(snakePart)]) end = true;

while(!food || snakeObj[coordToString(food)]){
    food = {x : randomFood().x,y : randomFood().y};
}
ctx.fillStyle = "#f2d729";
ctx.fillRect(food.x,food.y,GRID_SIZE,GRID_SIZE);

}
const move = () => {
    
}
window.onload = () => {
    var frame = setInterval(()=>{ 
        tick(frame);
       window.onkeydown = (e) => {
        //convertir les touches appuyer en nombre entier
        //console.log(e.keyCode)
        newDirection = {37 : -1,38 : -2,39 : 1,40 : 2,32 : 5}[e.keyCode] || newDirection;
        //console.log(newDirection)
    };
    },100)
}