<?php
session_start();
include "connexion.php";
$update = $bdd->prepare("UPDATE `Turn` SET `HasPlayedAnim`= 1 WHERE ID_Player=".$_SESSION["Player"]["ID_Player"].";");
$update->execute();

include "fetchHand.php"
 ?>
