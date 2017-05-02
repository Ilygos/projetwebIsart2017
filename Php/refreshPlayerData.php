<?php
include 'connexion.php';
$login = $_POST["login"];
$password = $_POST["password"];
$ID_Raw = $bdd->prepare("SELECT * FROM Players");
$ID_Raw->execute();
$ID = $ID_Raw->fetchAll(PDO::FETCH_ASSOC);

$_SESSION["Players"] = $ID;

$jsonPlayer = json_encode($ID);
echo $jsonPlayer;



 ?>
