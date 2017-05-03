<?php
  session_start();

  include "connexion.php";
  include "checkCards.php";

  $animToPlay = checkTurn();
  $jsonanim = json_encode($animToPlay);
  echo $jsonanim;

 ?>
