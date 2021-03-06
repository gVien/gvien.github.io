//This is the script for the treasure-hunt game!
//Revised version for the website!

var map = document.getElementById("myCanvas");
var ctx = map.getContext("2d");
var xMax = map.width;	//max width based on the canvas defined width
var yMax = map.height;	//max height based on the canvas defined width
var cellRadius = 10;	//this is the treasures size (in diameter)
var moveLeft = 100;

//set starting x,y position of player
var player = {
	x: 260,
	y: 260,
	hp: 100, 	//hit point of player, stepping on mine will lose hit points
	gold: 0,	//gold treasure
	move: function(direction) {
		
		//Movement restriction on 4 boundaries
		/******************************************************************************/
		var canMoveLeft = ((this.x>0) ? true : false);
		var canMoveUp = ((this.y>0)? true : false);
		var canMoveRight = ((this.x+2*cellRadius<xMax)? true:false);
		var canMoveDown = ((this.y+2*cellRadius<yMax)? true:false);
		/******************************************************************************/

		if (direction === "right" && canMoveRight && moveLeft>0) {
			this.x += 2*cellRadius;
			moveLeft--;
		} else if (direction === "left" && canMoveLeft && moveLeft>0) {
			this.x -= 2*cellRadius;
			moveLeft--;
		} else if (direction === "up" && canMoveUp && moveLeft>0) {
			this.y -= 2*cellRadius;
			moveLeft--;
		} else if (direction === "down" && canMoveDown && moveLeft>0) {
			this.y += 2*cellRadius;
			moveLeft--;
		}

		console.log(player);
		movePlayer();			//move player
		checkCollission();		//check collission
		scoreBoard();			//update score board

		//game over if HP is 0
		if (this.hp<=0 || moveLeft <=0) {
			//game over, clear canvas and display "Game Over!"
			ctx.clearRect(0, 0, xMax, yMax);
			sfx.loss.play();
			ctx.font = "20px Ariel";
			ctx.fillStyle = "red";
			ctx.fillText("Sorry you lost! you took too much damage from the bombs!", 10,230);
			ctx.fillText("or you ran out of moves! Play again by hitting", 60,250);
			ctx.fillText("the restart button!", 140,270);
			scoreBoard();
		}

		//winning conditions
		if (getGoldArr.length <= 0) {
			//clear canvas and display "You Won!!"
			sfx.win.play();
			ctx.clearRect(0, 0, xMax, yMax);
			ctx.font = "30px Ariel";
			ctx.fillStyle = "green";
			ctx.fillText("YOU WON!!!!!!", 125,230);
			ctx.font = "20px Ariel";
			ctx.fillText("All gold have been collected!!", 100,250);
			ctx.fillText("Play again by hitting the restart button!", 75,270);
			scoreBoard();
		}

	}
}

//this function generates the random points for the bomb and gold to align with the position of player
function randomPoints(maxSize, size) {
    //size is the radius of the circle or 2*size is the width or height of rectangle
    //maxSize is the size of the board (will be a square board)
    var numberOfPoints = maxSize/size - 1;
    var pointArr = [];
    var num = size;
    for (var i = 0;i<numberOfPoints;i++) {
        pointArr.push(num);
        num = pointArr[i]+size;
    }
    //randomly select the array element
    var randomArr = [];
    var randomNum;
    pointArr.forEach(function(element) {
        randomNum = Math.floor(Math.random()*numberOfPoints);
        randomArr.push(pointArr[randomNum]);
    });
    
   return randomArr;
}

var bomb = {
	bombsPosition: function() {
		var bombArr = [];		//creating an array of mines position [{...},{...}...]
		var randomXPoints = randomPoints(xMax,2*cellRadius);	//random points for x from above fxn
		var randomYPoints = randomPoints(yMax,2*cellRadius); 	//random points for y from above fxn
		//populating the positions of the mines/bombs
		var numberOfMines = Math.floor(Math.random()*randomXPoints.length);
		for (var i=0;i<=numberOfMines;i++) {
			bombArr.push({x:randomXPoints[i],y:randomYPoints[i]});
		}

		//depending on where the points are, the filter might not be required
		// filter out positions that are in the left and top boundary of the canvas
		bombArr = bombArr.filter(function(element) {return element.x>cellRadius && element.y>cellRadius});
		//filter out positions that are on the right and bottom boundaries
		bombArr = bombArr.filter(function(element) {return element.x<xMax-cellRadius && element.y<yMax-cellRadius});

		return bombArr;
	},
	populateBombs: function() {
		//displaying the bombs into the board
		var bombsPositionArr = this.bombsPosition();
		bombsPositionArr.forEach(function(bombsPositions) {
			var bombImage = new Image();
            bombImage.src = "avatar/bomb.png";
            ctx.drawImage(bombImage, bombsPositions.x, bombsPositions.y,2*cellRadius,2*cellRadius);
		})

		return bombsPositionArr;		//this returns the array to be access later
	}
};

//generating the position of golds and money
var gold = {
	goldPosition: function() {
	var goldArr = [];	//variable to store gold position 
	var randomXPoints = randomPoints(xMax,2*cellRadius);	//random points for x from above fxn
	var randomYPoints = randomPoints(yMax,2*cellRadius); 	//random points for y from above fxn
	//populating the positions of the mines/bombs
	var numberOfGold = Math.floor(Math.random()*randomXPoints.length);
	for (var i=0;i<=numberOfGold;i++) {
		goldArr.push({x:randomXPoints[i],y:randomYPoints[i]});
	}

	//depending on where the points are, the filter might not be required
	//filter out positions that are in the left and top boundary of the canvas
	goldArr = goldArr.filter(function(element) {return element.x>cellRadius&& element.y>cellRadius});
	//filter out positions that are on the right and bottom boundaries
	goldArr = goldArr.filter(function(element) {return element.x<xMax-cellRadius&& element.y<yMax-cellRadius});

	return goldArr;
	},
	populateGold: function(fxn) {
		//displaying gold on the canvas
		var goldPositionArr = this.goldPosition();
		goldPositionArr.forEach(function(goldPosition) {
			var goldImage = new Image();
            goldImage.src = "avatar/gold.png";
            ctx.drawImage(goldImage, goldPosition.x, goldPosition.y,2*cellRadius,2*cellRadius);
		})
		return goldPositionArr;		//this returns the array to be access later
	}
};

//an object to generate sound effect
var sfx = {
    bomb: new Audio("sound/bomb.wav"),
    gold: new Audio("sound/gold.wav"),
    win: new Audio("sound/cheering.wav"),
    loss: new Audio("sound/loss.wav")
}

//initialization of the game
var initGame = function() {
	draw();
	getBombArr = bomb.populateBombs();	//can be accessed globally
	getGoldArr = gold.populateGold();	//can be accessed globally
	scoreBoard();
}

initGame();		//initialize the game

function startOver() {
	ctx.clearRect(0, 0, xMax, yMax);
	player.x = 260;
	player.y = 260;
	moveLeft = 100;
	player.gold = 0;
	player.hp = 100;
	initGame();
}

//function to paint the player once moved
function draw() {
    image = new Image();
    image.src = "avatar/happy.png";
    ctx.drawImage(image, player.x, player.y,2*cellRadius,2*cellRadius);
}

//a function to check if the player is hitting gold or bomb
function checkCollission() {
	//check for bomb collission
	for (var index = 0;index<getBombArr.length;index++) {
		if (player.x === getBombArr[index].x  && player.y === getBombArr[index].y) {
				player.hp -= 10;
				sfx.bomb.play();
				getBombArr.splice(index,1);	//delete element
				console.log("You lost 10 HP!!! Be CAREFUL!!");
				break;
			}
	}

	//check for gold collission
	getGoldArr.forEach(function(positionElement,index) {
		if (player.x === positionElement.x && player.y === positionElement.y) {
			player.gold += 10;
			sfx.gold.play();
			getGoldArr.splice(index,1);	//delete element
			console.log("Good Job You have picked up 10 gold!!!");
		}
	});
}

//function to move the player on the map
function movePlayer() {
	//how do I delete the current blue dot??
	//first redraw the current dot to color white
	//draw draw a new dot in the new position color blue
	buttonMove("right",-2*cellRadius,0,2*cellRadius,2*cellRadius);
	buttonMove("left",2*cellRadius,0,2*cellRadius,2*cellRadius);
	buttonMove("up",0,2*cellRadius,2*cellRadius,2*cellRadius);
	buttonMove("down",0,-2*cellRadius,2*cellRadius,2*cellRadius);
}

//function to generate score board
function scoreBoard() {
	ctx.font = "12px Ariel";
	score = "HP: "+player.hp+"    "+"Gold: "+player.gold+"    "+"Move Left: "+moveLeft;
	ctx.fillStyle = "white"
	ctx.fillRect(0,480,200,20);
	ctx.fillStyle = "blue";
	ctx.fillText(score, 5,495);
}

// scoreBoarD();
//function to use arrow keys to move the player
function moveKey(e) {
	e = e || window.event;

    switch (e.keyCode) {
        case 38:   // arrow up key
        	keyMove("up",0,2*cellRadius,2*cellRadius,2*cellRadius);
            break;
        case 37: // arrow left key
        	keyMove("left",2*cellRadius,0,2*cellRadius,2*cellRadius);
            break;
        case 40: // arrow down key
			keyMove("down",0,-2*cellRadius,2*cellRadius,2*cellRadius);
            break;
        case 39: // arrow right key
        	keyMove("right",-2*cellRadius,0,2*cellRadius,2*cellRadius);
            break;
	}
}

//prevent the screen from scroll up or down
//very USEFUL!
document.addEventListener("keydown", function (e) {
  if([37,38,39,40].indexOf(e.keyCode) > -1){
    e.preventDefault();
  }
}, false);

window.addEventListener("keydown",moveKey,true);

//function for the keyboards
function keyMove(direction,xOffset,yOffset,recW,recH) {
	player.move(direction);
	ctx.clearRect(player.x+xOffset, player.y+yOffset, recW, recH);
	draw();
}

function buttonMove(direction,xOffset,yOffset,recW,recH) {
	document.getElementById(direction).addEventListener("click", function(){
		ctx.clearRect(player.x+xOffset, player.y+yOffset, recW, recH);
		draw();
	});
}
