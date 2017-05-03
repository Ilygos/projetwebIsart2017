<?php
function checkCards($bdd)
{
  $TYPES = array(
    0 => "high",
    1 => "low",
    2 => "middle");
    if ($_SESSION["Turn"][$_SESSION["Player"]["ID_Player"]-1]["CardPlayed"] == 0) return "joue";
    if ($_SESSION["Turn"][0]["CardPlayed"] == 0 || $_SESSION["Turn"][1]["CardPlayed"] == 0) return "pleaseWait";
    $p1CardType = $_SESSION["Turn"][0]["Type"];
    $p2CardType = $_SESSION["Turn"][1]["Type"];
    $indexCardP1 = array_search($p1CardType, $TYPES);
    $indexCardP2 = array_search($p2CardType, $TYPES);
    if ($p1CardType == "guard" && $p1CardType == "guard") return "turnResolved";
    else if ($p1CardType == "guard" )
    {
      guard(1,2, $bdd);
      return "turnResolved";
    }else if($p2CardType == "guard")
    {
      guard(2,1, $bdd);
      return "turnResolved";
    }
    if ( $indexCardP1 == $indexCardP2)
      return "meteor";
    else if($indexCardP1 == 0 && $indexCardP2 == count($TYPES)-1)
      playerHurt(2, 1, $bdd);
    else if($indexCardP2 == 0 && $indexCardP1 == count($TYPES)-1)
      playerHurt(1, 2, $bdd);
    else if($indexCardP1 > $indexCardP2)
      playerHurt(2, 1, $bdd);
    else if ($indexCardP1 < $indexCardP2)
      playerHurt(1, 2, $bdd);
    return "turnResolved";
}

function guard($idPlayerDef, $idPlayerAtk, $bdd)
{
  $soakedDamages = max(0,$_SESSION["Turn"][$idPlayerAtk - 1]["Damages"] - $_SESSION["Turn"][$idPlayerDef - 1]["Damages"]);
  $newLife = $_SESSION['Players'][$idPlayerDef - 1]["Life"] - $soakedDamages;
  $query = $bdd->prepare("UPDATE `Players` SET `Life`=".$newLife." WHERE `ID_Player`=".$idPlayerDef);
  $query->execute();
}

function playerHurt($idPlayerWin, $idPlayerLoose, $bdd)
{
  $newLife = $_SESSION['Players'][$idPlayerLoose - 1]["Life"] - $_SESSION["Turn"][$idPlayerWin - 1]["Damages"];
  $query = $bdd->prepare("UPDATE `Players` SET `Life`=".$newLife." WHERE `ID_Player`=".$idPlayerLoose);
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
  if ($p1CardType == "guard" || $p2CardType == "guard")
  {
    $animToPlay["Player1"] = $p1CardType;
    $animToPlay["Player2"] = $p2CardType;
    return $animToPlay;
  }
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
