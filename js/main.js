// SNAKE

    // Idées d'amélioration : 
        // Mettre une tête de serpent avant que le jeu ne commence ?
        // Mettre une pomme ronde

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


    // SMOOTH SCROLL

    $(function(){

    
        // La méthode .offset() renvoie les coordonnées (relatives au document) de l’élément (ici la section ciblée). On modifie la position de la scrollbar (grâce à scrollTop) jusqu’à atteindre cet élément, en animant le défilement avec .animate(), qui se fait sur l'élément body.
    
        $(".navbar a, footer .scroll").on("click", function(e){
              e.preventDefault();
              var hash = this.hash;
              
              $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
          
        });
    
    })

    // Chargement Canvas particules
    
    var partJson = {
        "particles": {
            "number": {
              "value": 30,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 10,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 300,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 12,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 800,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true   
    };
    
    var jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(partJson));
    
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', jsonUri, function() {
        console.log('callback - particles.js config loaded');
      });
    
    

    


