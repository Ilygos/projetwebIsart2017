<?php
session_start();

    // va aller dans la base, chercher le nom du player, renvoyer le score et autres infos, tout ce qui est en base...
    include 'connexion.php';
    $login = $_POST["firstName"];
    $password = $_POST["lastName"];
    $ID_Raw = $bdd->prepare("SELECT ID_Player FROM Players WHERE Login= '".$login."' AND Password= '".$password."' ");
    $ID_Raw->execute();
    $ID = $ID_Raw->fetchAll();


    echo $ID[0]['ID_Player'];
?>
