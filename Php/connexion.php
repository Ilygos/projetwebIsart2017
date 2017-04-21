<?php

    if($_SERVER['HTTP_HOST']=='localhost' || $_SERVER['HTTP_HOST']=='127.0.0.1'){
        $source = "mysql:host=localhost;dbname=Projet";
        $dbUser = "root";
        $dbPassword = "mysql";
    }
    else{
        $source = "mysql:host=localhost;dbname=2020_groupe_11";
        $dbUser = "2020_groupe_11";
        $dbPassword = "77i]2rrXU!";
    }

    try
    {
      $bdd = new PDO($source, $dbUser, $dbPassword);
    } catch (Exception $e) {
      die('Erreur :'.$e->getMessage());
    }

 ?>
