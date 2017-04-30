define(["jquery", "Player", "card"], function($, Player, card){
    const HAND_CARD_CLASS = "handCard";
    const CARD_DISPLAY = {
      'high':$('<img src="./ressources/player1_card_slash_high.png"></img>'),
      'low':$('<img src="./ressources/player1_card_slash_low.png"></img>'),
      'middle':$('<img src="./ressources/player1_card_slash_middle.png"></img>')
    //  'guard':''
    }

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
            </div>
            <div id="deck"></div>
        </div>
    </div>`);

    var id;


    function GameManager()
    {
      $('#stage').append(this.display);
    }

    var remainingDeckCards = 1;
    var cardOffsetX = 150;
    var cardOffsetY = 25;
    var player;
      var behaviorCard;


    function renderDeck(){
      var card;

      for (var i = 0; i < 100; i++)
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



    GameManager.prototype.init = function()
    {
      player = new Player();
      sethand();
      renderDeck();
    }


    function addCard(type, id)
    {
      var lCard = CARD_DISPLAY[type];

      lCard.on('mousedown', playCard);
      lCard.addClass(HAND_CARD_CLASS + " " + id)
      $("#hand").append(lCard);

    }

    function failure(jqxhr, textStatus, error)
		{
			console.log("doFailed :", jqxhr.status, textStatus, error);
		}

    function display()
    {
      console.log("Ah.");
    }
    function meteor()
    {
      console.log("METEORS DE PEGASE");
    }
    function cardPlayed(data)
    {
      if (data == "meteor")
        meteor();
      else if (data == "turnResolved")
       display();
      else
        console.log("Revenez Plus Tard !!" + data);

    }

    function playCard(card) {
      var idCardPlayed = card.target.className.split(" ").pop();
      var url = "playCard.php?id="+idCardPlayed;

			$.ajax({
				 url : "./Php/"+url, // url du script à interroger
					success : cardPlayed,
					error : failure
			});
    }

    function drag(pEvent)
    {
      pEvent.target.style.bottom = pEvent.clientY + "px";
      pEvent.target.style.left = pEvent.clientX + "px";
    }
    function drop(pEvent)
    {
    //  pEvent.target.style.top = (pEvent.target.style.top - 20) + "px";
    }
    /*$(".handCard").draggable({
      revert: true,
      revertDuration: 200,
      containment: "document"
    });*/
    function sethand()
    {
      var hand = Player.prototype.hand;
      for (var i = 0; i < Player.prototype.hand.length; i++)
      {
        addCard(player.hand[i]["Type"], player.hand[i]["ID_Card"]);
      }
    }


		return GameManager;
});
