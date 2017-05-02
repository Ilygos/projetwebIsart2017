<?php
  session_start();
  include "connexion.php";
  include "fetchTurn.php";
  if ($_SESSION["Turn"][0]["HasPlayedAnim"] > 0 && $_SESSION["Turn"][1]["HasPlayedAnim"] > 0 ){
    $update = $bdd->prepare("UPDATE `Turn` SET `CardPlayed`=0, `Meteor`=-1, `HasPlayedAnim` = 0 WHERE ID_Player= 1");
    $update->execute();
    $update = $bdd->prepare("UPDATE `Turn` SET `CardPlayed`=0, `Meteor`=-1, `HasPlayedAnim` = 0 WHERE ID_Player= 2");
    $update->execute();
    include "fetchTurn.php";
  }



 ?>
