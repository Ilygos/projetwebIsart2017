define(['jquery', "Player", "GameManager"], function($){


const ANIM_IDLE = "idle";
const ANIM_SLASH_HIGH = "slash_high";
const ANIM_SLASH_MIDDLE = "slash_middle";
const ANIM_SLASH_LOW = "slash_low";
const ANIM_RUN_CYCLE = "runCycle";
const ANIM_RUN_END = "runEnd";
const ANIM_GUARD_HIGHT = "guard_hight" ;
const ANIM_DEATH_BACK = "death_back";
const ANIM_HIT_MIDDLE = "hit_middle";
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
}



function introSequence(){
    currentAnim = ANIM_RUN_CYCLE;
    $("#player1").css('left', '-40%');
    $("#player1").addClass(currentAnim);
    $("#player2").css('right', '-40%');
    $("#player2").addClass(currentAnim);

    $("#player1").animate({"left":'50%'}, 700, 'linear', endIntroSequence);
    $("#player2").animate({"right":'50%'}, 700, 'linear', endIntroSequence);

}

function endIntroSequence(){
    $("#player1").removeClass(currentAnim);
    $("#player2").removeClass(currentAnim);

    currentAnim = ANIM_RUN_END;
    $("#player1").addClass(currentAnim);
    $("#player2").addClass(currentAnim);

    $("#player1").animate({"left":'50%'}, 400, 'easeOutSine', nextAnim);
    $("#player2").animate({"right":'50%'}, 400, 'easeOutSine', nextAnim);

}

function nextAnim(){

    if(++animIndex >= sequenceAnim.length) animIndex = 0;
    $("#player1").removeClass(currentAnim);
    $("#player2").removeClass(currentAnim);
    currentAnim = sequenceAnim[animIndex][0];
    $("#player1").addClass(currentAnim);
    $("#player2").addClass(currentAnim);

}

Animation.prototype.animIdle = function(id){
    $("#player"+id).removeAttr('class');
    currentAnim = ANIM_IDLE;
    $("#player"+id).addClass(currentAnim);
}
Animation.prototype.animLow = function(id){
    $("#player"+id).removeAttr('class');
    currentAnim = ANIM_SLASH_LOW;
    $("#player"+id).addClass(currentAnim);
}

Animation.prototype.animMiddle = function(id){
    $("#player"+id).removeAttr('class');
    currentAnim = ANIM_SLASH_MIDDLE;
    $("#player"+id).addClass(currentAnim);
}

Animation.prototype.animGuard = function(id){
    $("#player"+id).removeAttr('class');
    currentAnim = ANIM_GUARD_HIGHT;
    $("#player"+id).addClass(currentAnim);
}

Animation.prototype.animHigh = function(id){
    $("#player"+id).removeAttr('class');
    currentAnim = ANIM_SLASH_HIGH;
    $("#player"+id).addClass(currentAnim);
}

Animation.prototype.animDeath = function(id){
    $("#player"+id).removeAttr('class');
    currentAnim = ANIM_DEATH_BACK;
    $("#player"+id).addClass(currentAnim);
}

Animation.prototype.animHit = function(id){
    $("#player"+id).removeAttr('class');
    currentAnim = ANIM_HIT_MIDDLE;
    $("#player"+id).addClass(currentAnim);
}

function Animation(){

    init();
}

return Animation;

});
