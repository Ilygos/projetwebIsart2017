require.config({
	paths: {
		"jquery" : "../lib/jquery-3.1.1.min"
	}
});



require(["jquery", "Player"], function($, Player){
	var remainingDeckCards = 100;
	var cardOffsetX = 150;
	var cardOffsetY = 25;
	var player;
    var behaviorCard;


	function renderDeck(){
		var card;

		for (var i = 0; i < remainingDeckCards; i++)
		{
			var cardX;
			var cardY;
			card = $('<img src="ressources/cards.png" alt="Dos de carte du deck" class="card">');
			cardX = cardOffsetX - 0.2*i;
			cardY = cardOffsetY + 0.05*i;
			$(card).css({
				'right': cardX+'px',
				'bottom': cardY+'px'
			})
			$("#deck").append(card);
		}}



	function init()
	{
        behaviorCard = new card();
		player = new Player();
		renderDeck();
	}
	$(document).ready(init);


});
