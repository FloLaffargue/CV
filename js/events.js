document.addEventListener('keydown', function(e) {

    cleanArrows();

    if(e.keyCode === 38) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('.fa-arrow-circle-up').style.color = "#28a745";
        keyUp();  
    } 

    if(e.keyCode === 37) {
        document.querySelector('.fa-arrow-circle-left').style.color = "#28a745";
        keyLeft();  
    } 

    if(e.keyCode === 39) {
        document.querySelector('.fa-arrow-circle-right').style.color = "#28a745";
        keyRight();  
    } 
    
    if(e.keyCode === 40) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('.fa-arrow-circle-down').style.color = "#28a745";
        keyDown();  
    } 
    
})
document.querySelector('#demarrer').addEventListener('click', function(e) {
    if(e.target.textContent == "Démarrer") {
        // On reinitialise le score
        score = 0;
        document.querySelector('#nbPommes').textContent = 0;
        e.target.textContent = "Pause";
        // On met la var arreter à false sinon elle reste à true et le dessin ne se fait pas ( voir ligne 77)
        arreter = false;
        direction = "droite";
        // Et on est partit
        init();
        e.target.textContent = "Pause";
    } else if(e.target.textContent == "Pause") {
        clearTimeout(timer);
        e.target.textContent = "Reprendre";
    } else if(e.target.textContent == "Reprendre") {
        refreshCanvas();
        e.target.textContent = "Pause";
    }
})
document.querySelector('#normal').addEventListener('click', function(e) {
    cleanLevelButtons();
    e.target.style.backgroundColor = "rgb(255, 128, 64)";
    mode = 130;
    document.querySelector('#mode').textContent = "Normal";
})
document.querySelector('#intermediaire').addEventListener('click', function(e) {
    cleanLevelButtons();
    e.target.style.backgroundColor = "rgb(255, 128, 64)";
    mode = 70;
    document.querySelector('#mode').textContent = "Intermediaire";
})
document.querySelector('#expert').addEventListener('click', function(e) {
    cleanLevelButtons();
    e.target.style.backgroundColor = "rgb(255, 128, 64)";
    mode = 40;
    document.querySelector('#mode').textContent = "Expert";
})
document.querySelector('#alien').addEventListener('click', function(e) {
    cleanLevelButtons();
    e.target.style.backgroundColor = "rgb(255, 128, 64)";
    mode = 20;
    document.querySelector('#mode').textContent = "Alien";
})

// Mode mobile
const fleches = document.querySelectorAll('.touches i')

fleches.forEach( fleche => {
    fleche.addEventListener('click',function(e) {
        cleanArrows();
        let nom = e.target.className
        nom == "fas fa-arrow-circle-up" ? keyUp() : '';
        nom == "fas fa-arrow-circle-right" ? keyRight() : '';
        nom == "fas fa-arrow-circle-left" ? keyLeft() : '';
        nom == "fas fa-arrow-circle-down" ? keyDown() : '';
    })
})