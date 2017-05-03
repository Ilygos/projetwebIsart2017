define(["jquery", "Player", "card", "soundfx", "animation"], function($, Player, card, SoundFX, Animation){
    const HAND_CARD_CLASS = "handCard";
    const CARD_DISPLAY = {
      'high':$('<img src="./ressources/player1_card_slash_high.png"></img>'),
      'low':$('<img src="./ressources/player1_card_slash_low.png"></img>'),
      'middle':$('<img src="./ressources/player1_card_slash_middle.png"></img>'),
      'guard':$('<img src="./ressources/player1_card_guard.png"></img>')
    }
    const TEMPS_METEOR = 4;

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
                      <div id="player1"><h1 color="#FF0000"></h1></div>
                  </div>
                  <div id="groundRight">
                      <div id="player2"><h1 color="#FF0000"></h1></div>
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

    var players;
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
    var anim;
    var hasDrew = false;
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
      anim = new Animation();
      player = new Player();
      intervalHand = setInterval(refresh, 500);
      sethand();
      renderDeck();
    }

    function refresh()
    {
      Player.prototype.refreshHand();
      renderHand();
      checkForTurnResolve();
      refershPlayerData();
    }

    function checkForTurnResolve()
    {
      $.ajax({
         url : "./Php/fetchAnimToPlay.php ", // url du script à interroger
         dataType:'json',
          success : display,
          error : failure
      });
    }


    function refershPlayerData()
    {
      $.ajax({
				 url : "./Php/refreshPlayerData.php ", // url du script à interroger
         dataType:'json',
					success : function(data){
            for (var i = 0; i < data.length; i++) {
              $("#lifeBar"+"Player"+data[i]["ID_Player"] + " .lifeBar").css("width", data[i].Life+"%");
              $("#lifeBar"+"Player"+data[i]["ID_Player"]).effect("highlight", {color: "red"}, "slow");
            }
          },
					error : failure
			});
    }

    function addCard(type, id)
    {
      var lCard = CARD_DISPLAY[type].clone();

      lCard.addClass(HAND_CARD_CLASS + " " + id)
      lCard.on('click', playCard);
      $("#hand").append(lCard);

    }

    function failure(jqxhr, textStatus, error)
		{
			console.log("doFailed :", jqxhr.status, textStatus, error);
		}

    function resetTurn(){
      $.ajax({
         url : "./Php/resetTurn.php", // url du script à interroger
          success: function(){
          },
          error : failure
      });
    }
    function HasPlayedAnim()
    {
      if (!hasDrew){
        hasDrew = true;
        draw(1);
      }
      $.ajax({
         url : "./Php/animPlayed.php", // url du script à interroger
          success: function(){
          },
          error : failure
      });
    }
    function display(data)
    {
      switch (data["Player1"]) {
        case "hurt":
          anim.animHit(1);
          HasPlayedAnim();
          break;
        case "low":
          anim.animLow(1);
          HasPlayedAnim();
          break;
        case "high":
          anim.animHigh(1);
          HasPlayedAnim();
          break;
        case "middle":
          anim.animMiddle(1);
          HasPlayedAnim();
          break;
        case "guard":
          anim.animGuard(1);
          HasPlayedAnim();
          break;
        case "death":
          anim.animDeath(1);
          HasPlayedAnim();
          break;
        default:
          anim.animIdle(1);
          hasDrew = false;

      }
      switch (data["Player2"]) {
        case "hurt":
          anim.animHit(2);
          break;
        case "low":
          anim.animLow(2);
          break;
        case "high":
          anim.animHigh(2);
          break;
        case "middle":
          anim.animMiddle(2);
          break;
        case "guard":
          anim.animGuard(2);
          break;
        case "death":
          anim.animDeath(2);
          break;
        default:
          anim.animIdle(2);

      }
      if (data["Player1"] != 'idle' && data["Player2"] != "idle") var reset = setTimeout(resetTurn, 1250);
    }



    function fetchAnimToPlay()
    {
      $.ajax({
				 url : "./Php/fetchAnimToPlay.php", // url du script à interroger
         dataType:'json',
					success : display,
					error : failure
			});
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
            $("#countdown").html(click);
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
          SoundFX.playSFX("meteor", 0.6);
          $(document).on("click", function(){
            click ++;
            anim.animLow(Player.prototype.data["ID_Player"]);
            $("#countdown").html(click);
            $("#countdown").css({"font-size": 200+5*click+"px"});
          });
        }
      }, 1000);
    }


    function cardPlayed(data)
    {
      Player.prototype.refreshHand();
      SoundFX.playSFX("sword", 0.8);
      if (data == "meteor")
        meteor();
      else if (data == "pleaseWait")
      {
        alert("En Attente du joueur2. Vous pouvez revenir plus tard");
        return;
      }
      else if (data =="alreadyPlayed")
      {
        alert("Vous avez déjà joué ce tour.");
        return;
      }
      else
        fetchAnimToPlay();

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

    function renderHand()
    {
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
    }

    function logout()
    {

    }

		return GameManager;
});
