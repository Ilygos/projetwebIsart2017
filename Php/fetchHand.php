<?php
session_start();

  include 'connexion.php';
  $PlayerID = $_GET["ID"];
  $Data_Raw = $bdd->prepare("SELECT * FROM Deck INNER JOIN Hand ON Deck.ID_Card = Hand.ID_Card WHERE Hand.ID_Player=".$PlayerID);
  $Data_Raw->execute();
  $results = $Data_Raw->fetchAll(PDO::FETCH_ASSOC);
  $_SESSION["Hand"] = $results;
  $jsonResult = json_encode($results);
  echo $jsonResult;

?>
