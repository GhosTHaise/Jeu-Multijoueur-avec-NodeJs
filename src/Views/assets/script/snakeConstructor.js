class Snake{
    constructor(_player){
        this.playerName = _player
        this.newDirection;
        this.direction = this.newDirection = 1;
        this.snakeLength = 5;
        this.snake = [{x : WIDTH/2,y : HEIGHT/2}];
        this.food = null;
        this.end = false;
        this.score = 0;
    }
    randomFood = () => {
        var foodPosition = {};
        return  foodPosition = {x : Math.floor(Math.random() * WIDTH / GRID_SIZE) * GRID_SIZE,
                                y : Math.floor(Math.random() * HEIGHT / GRID_SIZE ) * GRID_SIZE
                            }   
    }
    //Convertir les coordonnees en String
    coordToString = (obj) => {
        return [obj.x,obj.y].join(',');
    }
    
    tick = (_frame) => {
        var snakePart = {x : this.snake[0].x,y : this.snake[0].y};
        if(Math.abs(this.direction) !== Math.abs(this.newDirection)){
            this.direction = this.newDirection;
        }
        var axis = (Math.abs(this.direction) === 1) ? 'x' : 'y';
        if(this.direction < 0 ){
            snakePart[axis] -= GRID_SIZE;
        }else{
            snakePart[axis] += GRID_SIZE;
        }
        if(this.food && this.food.x === snakePart.x && this.food.y === snakePart.y){
            this.food = null;
            this.snakeLength += 2;
            this.score ++;
        };
    ctx.fillStyle = "#22424a";
    ctx.fillRect(0,0,WIDTH,HEIGHT);
    //game over
    if(this.end){
        ctx.fillStyle = "#e8dbb0";
        ctx.font = "1rem Monospace";
        ctx.textAlign = "center";
        ctx.fillText("Game Over  - Score : "+this.score,WIDTH/2,HEIGHT /2);
        ctx.fillText("SPACE to Continue",WIDTH / 2,(HEIGHT /2)+75);
        
        if(this.newDirection == 5){
            location.reload();
        }
        //bug reset game
        clearInterval(_frame);
    }else{
        this.snake.unshift(snakePart);
        this.snake = this.snake.slice(0,this.snakeLength);
        ctx.fillStyle = "#e8dbb0";
        ctx.font = "0.6rem Monospace";
        ctx.fillText("Score : "+this.score.toString(10),5,20);
    }
    if(snakePart.x < 0 || snakePart.x > WIDTH || snakePart.y < 0 || snakePart.y > HEIGHT){
        this.end = true;
    }
    //draw the snake
    ctx.fillStyle = "#15b31b";
    var i =0,
        snakeObj = {};
    for(let snakeBody of this.snake){
        ctx.fillRect(snakeBody.x,snakeBody.y,GRID_SIZE-1,GRID_SIZE -1);
        if(i > 0) snakeObj[this.coordToString(snakeBody)] = true;
        i++;
    }
    if(snakeObj[this.coordToString(snakePart)]) this.end = true;
    
    while(!this.food || snakeObj[this.coordToString(this.food)]){
        this.food = {x : this.randomFood().x,y : this.randomFood().y};
    }
    ctx.fillStyle = "#f2d729";
    ctx.fillRect(this.food.x,this.food.y,GRID_SIZE,GRID_SIZE);
    
    }
}