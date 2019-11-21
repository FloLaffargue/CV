
    // Créer un mode responsive ( comme Mario)
    // Optimiser les fonctions ( ternaires ou autres )
    // Mettre une tête de serpend avant que le jeu ne commence ?
    // mettre une pomme ronde

    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    let blockSize = 15;
    let snake;
    let direction = "droite";
    let changeDirection = true;
    let snakeHead;
    let timer;
    let score = 0;
    let mode = 130;
    let widthLimit = (canvas.width / blockSize) - 1;
    let heightLimit = (canvas.height / blockSize) - 1;
    // let coeffX = 0;
    // let coeffY = 0; 
    let appleX;
    let appleY;
    // let tabPerdu = [
    //     // P
    //     [2 + coeffX,5 + coeffY],[2 + coeffX,6+ coeffY],[2 + coeffX,7+ coeffY],[2 + coeffX,8+ coeffY],[2 + coeffX,9+ coeffY],[3+ coeffX,5+ coeffY],[4+ coeffX,5+ coeffY],[5+ coeffX,5+ coeffY],[5+ coeffX,6+ coeffY],[5+ coeffX,7+ coeffY],[4+ coeffX,7+ coeffY],[3+ coeffX,7+ coeffY],
    //     // E    
    //     [7,5],[8,5],[9,5],[10,5],[7,6],[7,7],[8,7],[9,7],[7,8],[7,9],[8,9],[9,9],[10,9],
    //     // R
    //     [12,5],[13,5],[14,5],[14,6],[12,6],[12,7],[12,8],[12,9],[13,7],[14,8],[14,9],
    //     // D
    //     [16,5],[17,5],[16,6],[17,6],[18,6],[16,7],[18,7],[16,8],[17,8],[18,8],[16,9],[17,9],
    //     // U
    //     [20,5],[20,6],[20,7],[20,8],[20,9],[21,9],[22,9],[22,8],[22,7],[22,6],[22,5],
    //     // !
    //     [25,5],[25,6],[25,7],[25,9],
    // ]
    // let smiley = [
    //     [11,12],[11,15],[13,14],[13,13],[14,12],[15,12],[14,15],[15,15]
    // ]

    welcomeToTheGame();


