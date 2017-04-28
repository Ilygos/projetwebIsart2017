<?php
session_start();

include 'connexion.php';

$Data_Raw = $bdd->prepare("SELECT * FROM Deck INNER JOIN Turn ON Deck.ID_Card = Turn.ID_Card");
$Data_Raw->execute();
$results = $Data_Raw->fetchAll(PDO::FETCH_ASSOC);
$_SESSION["Turn"] = $results;
//$jsonResult = json_encode($results[0]);
//echo $jsonResult;
?>
