<?php
session_start();

  include 'connexion.php';
  $code = $_GET["code"];

  $PlayerID = $_SESSION["Player"]["ID_Player"];
  $raw = $bdd->prepare("SELECT * FROM Deck");
  $raw->execute();
  $cardList = $raw->fetchAll(PDO::FETCH_ASSOC);
  $idsHand = array();
  foreach($_SESSION["Hand"] as $value )
  {
    array_push($idsHand, $value["ID_Card"]);
  }
  if ($code == 3)
    $countToDraw = 3;
  else if($code == 1)
    $countToDraw = 1;
  else
    $countToDraw = 0;
  $query ="INSERT INTO `Hand`(`ID_Card`, `ID_Player`) VALUES (:idC, :idP)";
  $stmt = $bdd -> prepare($query);

  for($i = 0; $i < $countToDraw ; $i++)
  {
    do{
      $rand = rand( 1 , count($cardList));
    }while(array_search($rand, $idsHand));
    array_push($idsHand, $rand);
    $stmt->bindValue(':idC', $rand ,PDO::PARAM_INT) ;
    $stmt->bindValue(':idP', $PlayerID,PDO::PARAM_INT);
    $stmt -> execute(); //execute
  }



  $Hand_Raw = $bdd->prepare("SELECT * FROM Deck INNER JOIN Hand ON Deck.ID_Card = Hand.ID_Card WHERE Hand.ID_Player=".$PlayerID);
  $Hand_Raw->execute();
  $results = $Hand_Raw->fetchAll(PDO::FETCH_ASSOC);
  $_SESSION["Hand"] = $results;
  $jsonResult = json_encode($results);
  echo $jsonResult;
?>
