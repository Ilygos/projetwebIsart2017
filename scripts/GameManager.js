define(["jquery", "Player", "card", "jqueryUI"], function($, Player, card, UI){
    var id;

    GameManager.prototype.display = $(`<div id="container">
      <div id="bra">
          <div id="hudTop">
              <div id="hudPlayer1">
                  <span class="playerName">Masamune</span>
                  <div id="lifeBarPlayer1">
                      <div class="lifeBarMask">
                          <div class="lifeBar"></div>
                      </div>
                  </div>
              </div>
              <div id="hudPlayer2">
                  <span class="playerName">Nemusama</span>
                  <div id="lifeBarPlayer1">
                      <div class="lifeBarMask">
                          <div class="lifeBar"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="gamePlane">
              <div id="ground">
                  <div id="groundLeft">
                      <div id="player1"><h1 color="#FF0000">yo</h1></div>
                  </div>
                  <div id="groundRight">
                      <div id="player2"><h1 color="#FF0000">yo</h1></div>
                  </div>
              </div>
          </div>
        </div>
        <div id="hudBottom">
            <div id="logo">
                <img class="logo" src="ressources/logo.png">
            </div>
            <div id="hand">
                <img class="handCard" src="ressources/cards.png">
                <img class="handCard" src="ressources/cards.png">
                <img class="handCard" src="ressources/cards.png">
            </div>
            <div id="deck"></div>
        </div>
    </div>`);

    function GameManager()
    {
        init();
    }

    var remainingDeckCards = 1;
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

		return GameManager;
});
