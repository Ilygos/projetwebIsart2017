<?php
session_start();



$cardPlayed = $_GET["id"];

include 'connexion.php';
include "fetchTurn.php";

if ($_SESSION["Turn"][$_SESSION["Player"]["ID_Player"]-1]["CardPlayed"] == 0){
  $update = $bdd->prepare("UPDATE `Turn` SET `CardPlayed`=".$cardPlayed." WHERE ID_Player=".$_SESSION["Player"]["ID_Player"].";");
  $update->execute();
  $update = $bdd->prepare("DELETE FROM `Hand` WHERE `ID_Card`=".$cardPlayed." AND `ID_Player`=".$_SESSION["Player"]["ID_Player"]." LIMIT 1");
  $update->execute();
  include "fetchTurn.php";
  include "checkCards.php";
  echo checkCards($bdd);
}
else echo "alreadyPlayed";




?>
