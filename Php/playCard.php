<?php
session_start();

$TYPES = ["High","Low","Mid"];



function checkCards()
{
    var $p1CardType = $_SESSION["cardPlayed"][0]["Type"];
    var $p2CardType = $_SESSION["cardPlayed"][1]["Type"];
    if ( $TYPES.indexOf($p1CardType) == $TYPES.indexOf($p1CardType))
      return "meteor";
    else if($TYPES.indexOf($p1CardType) == 0 && $TYPES.indexOf($p2CardType) == count($TYPES)-1)
      playerHurt(1);
    else if($TYPES.indexOf($p2CardType) == 0 && $TYPES.indexOf($p1CardType) == count($TYPES)-1)
      playerHurt(2);
    else if($TYPES.indexOf($p1CardType) > $TYPES.indexOf($p2CardType))
      playerHurt(1);
    else if ($TYPES.indexOf($p1CardType) < $TYPES.indexOf($p2CardType))
      playerHurt(2);
    return "turnResolved";
}


function playerHurt($idPlayer)
{
  $newLife = $_SESSION["Player".$idPlayer]["Life"] - $_SESSION["Turn"][$idPlayer - 1]["Damage"];
  $query = $bdd->prepare("UPDATE `Players` SET `Life`=".$newLife." WHERE `ID_Player`=".$idPlayer);
}

?>
