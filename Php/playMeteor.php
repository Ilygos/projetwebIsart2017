<?php
session_start();

include 'connexion.php';

$update = $bdd->prepare("UPDATE `Turn` SET `Meteor`=".$meteor." WHERE ID_Player=".$_SESSION["Player"]["ID_Player"].";");
$update->execute();

include 'fetchTurn.php';


function checkMeteor(){
  if ($_SESSION["Turn"][0]["meteor"] == 0 || $_SESSION["Turn"][1]["meteor"] == 0 ) return "Veuillez Attendre";
  if ($_SESSION["Turn"][0]["meteor"] > $_SESSION["Turn"][1]["meteor"]) return "joueur1";
  else return "joueur2";
}

  echo checkMeteor();
?>
