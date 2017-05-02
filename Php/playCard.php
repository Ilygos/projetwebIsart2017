<?php
session_start();

$TYPES = array(
  0 => "high",
  1 => "low",
  2 => "middle");

$cardPlayed = $_GET["id"];

include 'connexion.php';

$update = $bdd->prepare("UPDATE `Turn` SET `CardPlayed`=".$cardPlayed." WHERE ID_Player=".$_SESSION["Player"]["ID_Player"].";");
$update->execute();
$update = $bdd->prepare("DELETE FROM `Hand` WHERE `ID_Card`=".$cardPlayed." AND `ID_Player`=".$_SESSION["Player"]["ID_Player"]);
$update->execute();

include "fetchTurn.php";

echo checkCards($TYPES, $bdd);

function checkCards($TYPES, $bdd)
{
    if ($_SESSION["Turn"][0]["CardPlayed"] == 0 || $_SESSION["Turn"][1]["CardPlayed"] == 0) return "pleaseWait";
    $p1CardType = $_SESSION["Turn"][0]["Type"];
    $p2CardType = $_SESSION["Turn"][1]["Type"];
    $indexCardP1 = array_search($p1CardType, $TYPES);
    $indexCardP2 = array_search($p2CardType, $TYPES);
    if ( $indexCardP1 == $indexCardP2)
      return "meteor";
    else if($indexCardP1 == 0 && $indexCardP2 == count($TYPES)-1)
      playerHurt(1, $bdd);
    else if($indexCardP2 == 0 && $indexCardP1 == count($TYPES)-1)
      playerHurt(2, $bdd);
    else if($indexCardP1 > $indexCardP2)
      playerHurt(1, $bdd);
    else if ($indexCardP1 < $indexCardP2)
      playerHurt(2, $bdd);
    return "turnResolved";
}

function playerHurt($idPlayer, $bdd)
{
  $query = $bdd->prepare("UPDATE `Players` SET `Life`=".$newLife." WHERE `ID_Player`=".$idPlayer);
  $query->execute();
}

?>
