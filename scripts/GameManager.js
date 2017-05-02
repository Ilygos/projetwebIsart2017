define(["jquery", "Player", "card", "soundfx"], function($, Player, card, SoundFX){
    const HAND_CARD_CLASS = "handCard";
    const CARD_DISPLAY = {
      'high':$('<img src="./ressources/player1_card_slash_high.png"></img>'),
      'low':$('<img src="./ressources/player1_card_slash_low.png"></img>'),
      'middle':$('<img src="./ressources/player1_card_slash_middle.png"></img>')
    //  'guard':''
    }
    const TEMPS_METEOR = 5;

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
    var intervalHand;
    var click;
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
      SoundFX.initSound();
      SoundFX.playSound("maintheme");
      player = new Player();
      sethand();
      renderDeck();
    }


    function addCard(type, id)
    {
      var lCard = CARD_DISPLAY[type].clone();

      lCard.on('click', playCard);
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
      draw(1);
    }

    function countdown()
    {
    }

    function meteor()
    {
      console.log("METEORS DE PEGASE");
      $("#meteor").css({"display": "flex"});
      countdown = 3;
      var id = setInterval(function(){
        $("#countdown").html(countdown);
        countdown--;
        if (countdown < 0)
        {
          clearInterval(id);
          $("#countdown").html("Clickez!!");
          var id2 = setInterval(function(){
            $(document).off("click");
            $("#countdown").css({"font-size": "500px"});
            var id3 = setInterval(function(){
              clearInterval(id3);
              $("#countdown").css({"font-size": "200px"});
              $("#countdown").html("");
              $("#meteor").css({"display": "none"});
            },2000);
            clearInterval(id2);
          }, 1000*TEMPS_METEOR);
          click = 0;
          $(document).on("click", function(){
            click ++;
            SoundFX.playSFX("meteor", 0.6);
            $("#countdown").html(click);
            $("#countdown").css({"font-size": 200+5*click+"px"});
          });
        }
      }, 1000);
      draw(1);
    }
    function cardPlayed(data)
    {
      Player.prototype.refreshHand();
      SoundFX.playSFX("sword", 0.8);
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

    function renderHand()
    {
      console.log(Player.prototype.hand.length);
      $("#hand").empty();
      for (var i = 0; i < Player.prototype.hand.length; i++)
      {
        addCard(Player.prototype.hand[i]["Type"], Player.prototype.hand[i]["ID_Card"]);
      }
    }

    function draw(code)
    {
      var url = "draw.php?code=" + code;
      $.ajax({
				 url : "./Php/"+url, // url du script à interroger
         dataType:'json',
					success : renderHand,
					error : failure
			});
    }

    function sethand()
    {
      if (Player.prototype.hand.length <= 0) {
        draw(3);
      }
      else draw(0);
      intervalHand = setInterval(renderHand, 1000);
    }

    function logout()
    {

    }

		return GameManager;
});
