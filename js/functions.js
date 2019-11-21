function init() {
    snake = new Snake([
        [7,4],
        [6,4],
        [5,4],
    ])
    apple = new Apple([]);
    apple.create();
    refreshCanvas();
}

function refreshCanvas() {
    ctx.clearRect(0,0,canvas.width, canvas.height); 
    snake.advance();

    if(snake.hasEatenApple()) {
        apple.create();
        score++;
        document.querySelector('#nbPommes').textContent = score;
    } 
    else if(snake.hasTouchedWall()) {
        displayEndGame();
        displayBestScore();
        document.querySelector('#demarrer').textContent = "Démarrer";
        return;
    } 
    // Test si le serpent s'est touché lui même ( donc je test si la tête générée ne correspond à un élément du corps)
    // On démarre de 1 parce que sinon je test si la tête est égale à elle-même...
    else if(snake.hasTouchedItself()) {
        displayEndGame();
        displayBestScore();
        document.querySelector('#demarrer').textContent = "Démarrer";
        return;
    }
    // Sinon il se passe rien et donc j'enlève une unité à la queue du serpent
    else {
         snake.body.pop();                
    }

    // Je n'arrive à ces instructions que si je n'ai ni touché un mur ni le corps du serpent 
    snake.draw();
    apple.draw();
    changeDirection = true;
    timer = setTimeout(refreshCanvas,mode);

}

function drawBlock(block) {
    let positionX = block[0] * blockSize;
    let positionY = block[1] * blockSize;
    ctx.fillRect(positionX, positionY, blockSize, blockSize);
}

// Fonction constructeur
function Snake(body) {

    this.body = body;
    this.draw = function () {
        ctx.save();

        // SNAKE
        ctx.fillStyle = "red";
        for(let i = 0; i < this.body.length; i++){
            drawBlock(this.body[i]);
        }

        ctx.restore();
    }
    this.advance = function() {

        // Constrution du snake
        snakeHead = this.body[0].slice();

        if(direction === "droite") {
            snakeHead[0]++;
        } else if (direction === "gauche") {
            snakeHead[0]--;
        } else if (direction === "bas") {
            snakeHead[1]++;
        } else if (direction === "haut") {
            snakeHead[1]--;
        }
        
        // Incrémentation de la tête
        this.body.unshift(snakeHead);
    }

    this.hasEatenApple = function() {

        // Test si la pomme a été mangée (est ce que les coordonnées de la tête du snake diffère de celle de la pomme)
        if(snakeHead[0] != apple.body[0] || snakeHead[1] != apple.body[1]) {
            return false; 
        } else { 
            // La pomme a été mangée donc on en genere une, et on incrémente le score
            return true;
        }
    }

    this.hasTouchedWall = function () {
        // Test si on a touché un mur ( si la tête a dépassé 27 en X ou en Y)
        if(snakeHead[0] > widthLimit || snakeHead[1] > heightLimit || snakeHead[0] < 0 || snakeHead[1] < 0) {
            return true;
        } else {
            return false;
        }
    }

    this.hasTouchedItself = function() {

        for(let j = 1; j < snake.body.length; j++) {
            if(snakeHead[0] == snake.body[j][0] && snakeHead[1] == snake.body[j][1]) {
                return true;
            }
        }
    }
  
}

function Apple(body) {

    this.body = body;
    this.create = function() {
        
        appleX = Math.floor(Math.random() * widthLimit);
        appleY = Math.floor(Math.random() * heightLimit);
    
        console.log("Pomme X : " + appleX);
        console.log("Pomme Y : " + appleY);
    
        // Check si la position de la pomme ne se trouve pas dans le snake
        if(this.intoSnake()) {
            this.create();
        } else {
            this.body[0] = appleX;
            this.body[1] = appleY;
        }
    }
    this.draw = function() {
        ctx.save();
        ctx.fillStyle = "green";
        ctx.fillRect(apple.body[0] * blockSize, apple.body[1] * blockSize, blockSize, blockSize);
        ctx.restore();
    }
    this.intoSnake = function() {

        for(let k = 0; k < snake.body.length; k++) {
            if(snake.body[k][0] == appleX && snake.body[k][1] == appleY) {
                return true;
            }
        }
    }
  
}


function keyUp() {
    if((direction === "gauche" || direction === "droite") && changeDirection == true) {
        direction = "haut";
        changeDirection = false;
    }
}

function keyDown() {
    if((direction === "gauche" || direction === "droite") && changeDirection == true) {
        direction = "bas";
        changeDirection = false;
    }
}

function keyLeft() {
    if((direction === "haut" || direction === "bas") && changeDirection == true) {
        direction = "gauche";
        changeDirection = false;
    }
}

function keyRight() {
    if((direction === "haut" || direction === "bas") && changeDirection == true) {
        direction = "droite";
        changeDirection = false;
    }
}

function displayEndGame() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "purple";
    ctx.font = "4rem sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Perdu !", canvas.width / 2, canvas.height / 2 - 50);
    ctx.fillText(":(", canvas.width / 2, canvas.height / 2 + 30);
    // for(let r = 0; r < tabPerdu.length; r++) {
    //     ctx.fillRect(tabPerdu[r][0] * blockSize,tabPerdu[r][1] * blockSize, blockSize, blockSize)
    // }

    // for(let s = 0; s < smiley.length; s++) {
    //     ctx.fillRect(smiley[s][0] * blockSize, smiley[s][1] * blockSize, blockSize, blockSize);
    // }

}

function displayBestScore() {
    let oldScore = document.querySelector('#meilleureScore');
    if(score > oldScore.textContent) {
        oldScore.textContent = score;
    }
}

function cleanArrows() {

    let arrows = document.querySelectorAll('.fas');
    arrows.forEach( arrow => {
        arrow.style.color = "grey";
    })
}

function cleanLevelButtons() {
    let boutons = document.querySelectorAll('.boutons button');
    boutons.forEach( bouton => {
        bouton.style.backgroundColor = "#ccc";
        bouton.style.color = "white";
    })
}

function welcomeToTheGame() {
    ctx.font = "2.3rem sans-serif";
    ctx.fillStyle = "#BADA55";
    ctx.textAlign = "center";
    ctx.fillText("Bienvenue dans ce jeu du serpent", canvas.width / 2  ,canvas.height / 2);
    ctx.fillText(":)", canvas.width / 2 , (canvas.height / 2)+ 40);
}