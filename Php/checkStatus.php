<?php
  session_start();

  include "connexion.php";
  include "checkCards.php";


  echo checkCards($bdd);

 ?>
