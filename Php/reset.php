<?php
session_start();
session_destroy();
include "connexion.php";
$update = $bdd->prepare("DELETE * FROM `Hand`");
$update->execute();

$update = $bdd->prepare("UPDATE `Turn` SET `CardPlayed`=0, `Meteor`=-1, `HasPlayedAnim` = 0 WHERE ID_Player= 1");
$update->execute();
$update = $bdd->prepare("UPDATE `Turn` SET `CardPlayed`=0, `Meteor`=-1, `HasPlayedAnim` = 0 WHERE ID_Player= 2");
$update->execute();

$update = $bdd->prepare("UPDATE `Players` SET `Life`=100 WHERE ID_Player= 1");
$update->execute();
$update = $bdd->prepare("UPDATE `Players` SET `Life`=100 WHERE ID_Player= 2");
$update->execute();



 ?>
