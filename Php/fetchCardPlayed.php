<?php
session_start();

$Player1Card = $_POST["Player1CardID"];
$Player2Card = $_POST["Player2CardID"];

include 'connexion.php';

$Data_Raw = $bdd->prepare("SELECT * FROM Deck WHERE ID_Card=$Player1Card OR ID_Card=$Player2Card");
$Data_Raw->execute();
$results = $Data_Raw->fetchAll(PDO::FETCH_ASSOC);
$jsonResult = json_encode($results);
echo $jsonResult;


?>
