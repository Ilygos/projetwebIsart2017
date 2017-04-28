<?php
session_start();

$TYPES = array(
  0 => "High",
  1 => "Low",
  2 => "Mid");

$cardPlayed = $_GET["id"];

include 'connexion.php';

$Data_Raw = $bdd->prepare("UPDATE `Turn` SET `CardPlayed`=".$cardPlayed." WHERE ID_Player=".$_SESSION["Player"]["ID_Player"].";");
$Data_Raw->execute();

include 'fetchTurn.php';

$_SESSION["Turn"][$_SESSION["Player"]["ID_Player"]-1]["CardPlayed"];

echo checkCards($TYPES);

function checkCards($TYPES)
{
    $p1CardType = $_SESSION["Turn"][0]["Type"];
    $p2CardType = $_SESSION["Turn"][1]["Type"];
    $indexCardP1 = array_search($p1CardType, $TYPES);
    $indexCardP2 = array_search($p2CardType, $TYPES);
    if ( $indexCardP1 == $indexCardP2)
      return "meteor";
    else if($indexCardP1 == 0 && $indexCardP2 == count($TYPES)-1)
      playerHurt(1);
    else if($indexCardP2 == 0 && $indexCardP1 == count($TYPES)-1)
      playerHurt(2);
    else if($indexCardP1 > $indexCardP2)
      playerHurt(1);
    else if ($indexCardP1 < $indexCardP2)
      playerHurt(2);
    return "turnResolved";
}

function playerHurt($idPlayer)
{
  $newLife = $_SESSION["Player".$idPlayer]["Life"] - $_SESSION["Turn"][$idPlayer - 1]["Damage"];
  $query = $bdd->prepare("UPDATE `Players` SET `Life`=".$newLife." WHERE `ID_Player`=".$idPlayer);
  $query->execute();
}

?>
