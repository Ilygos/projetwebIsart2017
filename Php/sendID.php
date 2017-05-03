<?php
session_start();

    // va aller dans la base, chercher le nom du player, renvoyer le score et autres infos, tout ce qui est en base...
    include 'connexion.php';
    $login = $_POST["login"];
    $password = $_POST["password"];
    $ID_Raw = $bdd->prepare("SELECT * FROM Players WHERE Login= '".$login."' AND Password= '".$password."' ");
    $ID_Raw->execute();
    $ID = $ID_Raw->fetchAll(PDO::FETCH_ASSOC);

    $_SESSION["Player"] = $ID[0];
    
    $jsonPlayer = json_encode($ID[0]);
    echo $jsonPlayer;
?>
