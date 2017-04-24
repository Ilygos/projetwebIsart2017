const ANIM_IDLE = "idle";
const ANIM_SLASH_HIGH = "slash_high";
const ANIM_SLASH_MIDDLE = "slash_middle";
const ANIM_SLASH_LOW = "slash_low";
const ANIM_RUN_CYCLE = "runCycle";
const ANIM_RUN_END = "runEnd";

var player1 = $("#player1");
var player2 = $("#player2");
var sequenceAnim = [
                    [ANIM_SLASH_HIGH, 2], [ANIM_SLASH_MIDDLE, 1], [ANIM_SLASH_LOW, 1],
                    [ANIM_SLASH_HIGH, 1], [ANIM_SLASH_LOW, 2], [ANIM_SLASH_MIDDLE, 1],
                    [ANIM_IDLE, 3]
                   ]; // le chiffre représente le nombre de répétition à faire par anim
var currentAnim = sequenceAnim[0][0];
var animIndex = -1; // index de sequenceAnim
var animIteration = 0; // le nombre de répétition à faire par anim

function init(){
    
    introSequence();
    player2.css('right', '-30%');
    player2.addClass(ANIM_IDLE);
    
}

function introSequence(){
    currentAnim = ANIM_RUN_CYCLE;
    player1.css('left', '-50%');
    player1.addClass(currentAnim);
    
  
    // jquery animate, vous pouvez ajouter des paramètres de easings en téléchargeant jQueryUI : http://jqueryui.com/download/#!version=1.12.1&themeParams=none&components=111111111111000000000000000000001111111111111111
    // Pour tester les easings (bas de page) : http://api.jqueryui.com/easings/
    player1.animate({"left":'50%', "bottom":'20%'}, 700, 'linear', endIntroSequence);
  //  player2.animate({"right":'40%'}, 800, 'linear', endIntroSequence);
}

function endIntroSequence(){
    player1.removeClass(currentAnim);
   // player2.removeClass(currentAnim);
    currentAnim = ANIM_RUN_END;
    player1.addClass(currentAnim);
    //player2.addClass(currentAnim);
    player1.animate({"left":'50%'}, 400, 'easeOutSine', nextAnim);
    //player2.animate({"right":'50%'}, 400, 'easeOutSine', nextAnim);
    
    player1.on("webkitAnimationIteration", repeatAnim);
    player1.on("animationiteration", repeatAnim);
    
    // J'ai choisi de faire les animations en boucle (même les attaques, voir la css anim est en infinite)
    // et écouter le animIteration (répétition d'une animation), pour faire cet enchainement.
    // Vous pouvez faire des anim css jouée qu'une fois et écouter animationend mais vous serez embêtés pour jouer un nombre aléatoire de fois
    // une animation...
    // https://www.w3schools.com/jsref/event_animationstart.asp
    // https://www.w3schools.com/jsref/event_animationend.asp
    // https://www.w3schools.com/jsref/event_animationiteration.asp
    // le clignottement des animations n'a lieu qu'une seule fois, il n'aura plus lieu lorsque vous aurez préchargé vos assets !
}

function repeatAnim(){
    if(++animIteration >= sequenceAnim[animIndex][1]){
        animIteration = 0;
        nextAnim();
    }
}

function nextAnim(){
    if(++animIndex >= sequenceAnim.length) animIndex = 0;
    player1.removeClass(currentAnim);
    currentAnim = sequenceAnim[animIndex][0];
    player1.addClass(currentAnim);
}

$(document).ready(init);