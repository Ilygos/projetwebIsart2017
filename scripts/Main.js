require.config({
	paths: {
		"jquery" : "../lib/jquery-3.1.1.min",
		"jqueryUI" : "../lib/jquery-ui.min"
	},

	shim: {
        "jquery-ui": {
            exports: "Ui",
            deps: ['jquery']
        }
    }
});



require(["jquery", "Player", "card", "jqueryUI"], function($, Player, card, Ui){
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
		player = new Player();
		renderDeck();
	}
	$(document).ready(init);


});
