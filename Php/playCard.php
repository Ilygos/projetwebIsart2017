<?php
session_start();

$TYPES = array(
  0 => "high",
  1 => "low",
  2 => "middle");

$cardPlayed = $_GET["id"];

include 'connexion.php';

$Data_Raw = $bdd->prepare("UPDATE `Turn` SET `CardPlayed`=".$cardPlayed." WHERE ID_Player=".$_SESSION["Player"]["ID_Player"].";");
$Data_Raw->execute();

$Data_Raw = $bdd->prepare("SELECT * FROM Deck INNER JOIN Turn ON Deck.ID_Card = Turn.CardPlayed");
$Data_Raw->execute();
$results = $Data_Raw->fetchAll(PDO::FETCH_ASSOC);
$_SESSION["Turn"] = $results;


echo checkCards($TYPES);

function checkCards($TYPES)
{
    if ($_SESSION["Turn"][0]["CardPlayed"] == 0 || $_SESSION["Turn"][1]["CardPlayed"] == 0) return "pleaseWait";
    $p1CardType = $_SESSION["Turn"][0]["Type"];
    $p2CardType = $_SESSION["Turn"][1]["Type"];
    $indexCardP1 = array_search($p1CardType, $TYPES);
    $indexCardP2 = array_search($p2CardType, $TYPES);
    if ( $indexCardP1 == $indexCardP2)
      return "meteor";
    else if($indexCardP1 == 0 && $indexCardP2 == count($TYPES)-1)
    $a=1;//  playerHurt(1);
    else if($indexCardP2 == 0 && $indexCardP1 == count($TYPES)-1)
$a=1;  //    playerHurt(2);
    else if($indexCardP1 > $indexCardP2)
  $a=1;  //  playerHurt(1);
    else if ($indexCardP1 < $indexCardP2)
  $a=1;  //  playerHurt(2);
    return "turnResolved";
}

function playerHurt($idPlayer)
{
  $newLife = $_SESSION["Player".$idPlayer]["Life"] - $_SESSION["Turn"][$idPlayer - 1]["Damage"];
  $query = $bdd->prepare("UPDATE `Players` SET `Life`=".$newLife." WHERE `ID_Player`=".$idPlayer);
  $query->execute();
}

?>
