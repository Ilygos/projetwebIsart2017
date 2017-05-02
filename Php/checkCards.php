<?php
function checkCards($bdd)
{
  $TYPES = array(
    0 => "high",
    1 => "low",
    2 => "middle");
    if ($_SESSION["Turn"][0]["CardPlayed"] == 0 || $_SESSION["Turn"][1]["CardPlayed"] == 0) return "pleaseWait";
    $p1CardType = $_SESSION["Turn"][0]["Type"];
    $p2CardType = $_SESSION["Turn"][1]["Type"];
    $indexCardP1 = array_search($p1CardType, $TYPES);
    $indexCardP2 = array_search($p2CardType, $TYPES);
    if ( $indexCardP1 == $indexCardP2)
      return "meteor";
    else if($indexCardP1 == 0 && $indexCardP2 == count($TYPES)-1)
      playerHurt(1, $bdd);
    else if($indexCardP2 == 0 && $indexCardP1 == count($TYPES)-1)
      playerHurt(2, $bdd);
    else if($indexCardP1 > $indexCardP2)
      playerHurt(1, $bdd);
    else if ($indexCardP1 < $indexCardP2)
      playerHurt(2, $bdd);
    return "turnResolved";
}

function playerHurt($idPlayer, $bdd)
{
  $query = $bdd->prepare("UPDATE `Players` SET `Life`=".$newLife." WHERE `ID_Player`=".$idPlayer);
  $query->execute();
}

function checkTurn()
{
  $TYPES = array(
    0 => "high",
    1 => "low",
    2 => "middle");
  $animToPlay = array('Player1' => '',
                      'Player2' => '');


  $p1CardType = $_SESSION["Turn"][0]["Type"];
  $p2CardType = $_SESSION["Turn"][1]["Type"];
  $indexCardP1 = array_search($p1CardType, $TYPES);
  $indexCardP2 = array_search($p2CardType, $TYPES);

  if ($_SESSION["Turn"][0]["CardPlayed"] == 0 || $_SESSION["Turn"][1]["CardPlayed"] == 0){
    $animToPlay["Player1"] = "idle";
    $animToPlay["Player2"] = "idle";
  }
  else if ( $indexCardP1 == $indexCardP2)
  {
    $animToPlay["Player1"] = $TYPES[$indexCardP1];
    $animToPlay["Player2"] = $TYPES[$indexCardP2];
  }
  else if($indexCardP1 == 0 && $indexCardP2 == count($TYPES)-1)
  {
    $animToPlay["Player1"] = "hurt";
    $animToPlay["Player2"] = $TYPES[$indexCardP2];
  }
  else if($indexCardP2 == 0 && $indexCardP1 == count($TYPES)-1)
  {
    $animToPlay["Player1"] = $TYPES[$indexCardP1];
    $animToPlay["Player2"] = "hurt";
  }
  else if($indexCardP1 > $indexCardP2)
  {
    $animToPlay["Player1"] = "hurt";
    $animToPlay["Player2"] = $TYPES[$indexCardP2];
  }
  else if ($indexCardP1 < $indexCardP2)
  {
    $animToPlay["Player1"] = $TYPES[$indexCardP1];
    $animToPlay["Player2"] = "hurt";
  }
  return $animToPlay;
}

 ?>
