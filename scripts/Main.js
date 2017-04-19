console.log("1");
require.config({
	paths: {
		"jquery" : "../lib/jquery-3.1.1.min"
	}
});



console.log("2");
require(["jquery", "Player"], function($, Player){
	console.log("3");
	var remainingDeckCards = 100;
	var cardOffsetX = 150;
	var cardOffsetY = 25;
	var player;

	function displayCardNumber(pEvent)
	{
		$("#deck-number").text($("#deck").children().length - 1);
	}

	function hideCardNumber(pEvent)
	{
		$("#deck-number").text = "";
	}

	$("#deck").mouseenter(displayCardNumber);
	$("#deck").mouseleave(hideCardNumber);

	function renderDeck(){
		var card;

		for (var i = 0; i < remainingDeckCards; i++)
		{
			var cardX;
			var cardY;
			card = $('<img src="ressources/cards.png" alt="Dos de carte du deck" class="deck-card">');
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
