<?php
session_start();

include 'connexion.php';

$update = $bdd->prepare("UPDATE `Turn` SET `Meteor`=".$meteor." WHERE ID_Player=".$_SESSION["Player"]["ID_Player"].";");
$update->execute();

include 'fetchTurn.php';


function checkMeteor($bdd){
  if ($_SESSION["Turn"][0]["meteor"] == 0 || $_SESSION["Turn"][1]["meteor"] == 0 ) return "Veuillez Attendre";
  if ($_SESSION["Turn"][0]["meteor"] > $_SESSION["Turn"][1]["meteor"]){
    playerHurt(1 ,2, $bdd);
    return "joueur1";
  }
  else{
    playerHurt( 2,1, $bdd);
    return "joueur2";
  }
}

function playerHurt($idPlayerWin, $idPlayerLoose, $bdd)
{
  $newLife = $_SESSION['Players'][$idPlayerLoose - 1]["Life"] - $_SESSION["Turn"][$idPlayerWin - 1]["meteor"];
  $query = $bdd->prepare("UPDATE `Players` SET `Life`=".$newLife." WHERE `ID_Player`=".$idPlayerLoose);
  $query->execute();
}

  echo checkMeteor();
?>
