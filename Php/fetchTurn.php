<?php


$Data_Raw = $bdd->prepare("SELECT * FROM Deck INNER JOIN Turn ON Deck.ID_Card = Turn.CardPlayed");
$Data_Raw->execute();
$results = $Data_Raw->fetchAll(PDO::FETCH_ASSOC);
$_SESSION["Turn"] = $results;

?>
