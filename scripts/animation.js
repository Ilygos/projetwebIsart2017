const ANIM_IDLE = "idle";
const ANIM_SLASH_HIGH = "slash_high";
const ANIM_SLASH_MIDDLE = "slash_middle";
const ANIM_SLASH_LOW = "slash_low";
const ANIM_RUN_CYCLE = "runCycle";
const ANIM_RUN_END = "runEnd";

var player1 = $("#player1");
var player2 = $("#player2");
var sequenceAnim = [
                    
                    [ANIM_IDLE, 3]
                   ]; // le chiffre représente le nombre de répétition à faire par anim
var currentAnim = sequenceAnim[0][0];
var animIndex = -1; // index de sequenceAnim
var animIteration = 0; // le nombre de répétition à faire par anim

function init(){
    
    introSequence();

    player2.addClass(ANIM_IDLE);
    
}

function introSequence(){
    currentAnim = ANIM_RUN_CYCLE;
    player1.css('left', '-40%');
    player1.addClass(currentAnim);
    player2.css('right', '-40%');
    player2.addClass(currentAnim);
  
    
    player1.animate({"left":'50%'}, 700, 'linear', endIntroSequence);
    player2.animate({"right":'50%'}, 700, 'linear', endIntroSequence);
 
}

function endIntroSequence(){
    player1.removeClass(currentAnim);
    player2.removeClass(currentAnim);
   
    currentAnim = ANIM_RUN_END;
    player1.addClass(currentAnim);
   
    
    player1.animate({"left":'50%'}, 400, 'easeOutSine', nextAnim);
    player2.animate({"right":'50%'}, 400, 'easeOutSine', nextAnim);
    
    
    player1.on("webkitAnimationIteration", repeatAnim);
    player1.on("animationiteration", repeatAnim);
    
  
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