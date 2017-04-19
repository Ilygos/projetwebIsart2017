<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Isart Digital - PGDP - Projet Web 2017">
    <link rel="stylesheet" href="css/style.css">
    <title>Isart Digital - PGDP - Projet Web 2017</title>
</head>
<body>
	<div id="playzone">
		<div id="lifezone">
			<div class="lifebar lifebarP1 bar">
				LifeBar Player 1
			</div>
			<div class="lifebar lifebarP2 bar">
				LifeBar Player 2
			</div>
			<div class="clearBoth"></div>
		</div>
		<div id="meteor-zone">
			<div class="bar meteorbar">
				<p id="timer">Timer</p>
			</div>
		</div>
		<div id="stage">
			<div id="infos">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita atque aliquid eligendi totam, explicabo numquam impedit id omnis! Unde placeat amet deleniti possimus neque aperiam quae optio perferendis consequatur dolorem.</div>
			<img src="ressources/test_perso.png" alt="Test Perso1" class="player player1">
			<img src="ressources/test_perso.png" alt="Test Perso2" class="player player2">
		</div>
	</div>
	<div id="cardzone">
		<div id="hand">
			<img src="ressources/card_play.png" alt="Carte en main" class="hand-card">
			<img src="ressources/card_play.png" alt="Carte en main" class="hand-card">
			<img src="ressources/card_play.png" alt="Carte en main" class="hand-card">
		</div>
		<div id="round">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quibusdam aut reprehenderit itaque ea, nulla debitis voluptatem, quia non est qui. Odio accusantium voluptate libero at quam explicabo, dolorum mollitia.</p>
		</div>
		<div id="deck">
			<p id="deck-number"></p>
		</div>
	</div>

	<script data-main="scripts/main" src="lib/require.js"></script>
   	<script src="lib/jquery-3.1.1.min.js"></script>
</body>
</html>