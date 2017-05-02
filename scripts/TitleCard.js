define(["jquery", "Player", "card", "GameManager" ,"jqueryUI", "soundfx"], function($, Player, card, GameManager, UI, SoundFX){
  var id;
  var that;

    TitleCard.prototype.display = $(`<img id="logo" src="ressources/logo.png">
    <div id="container">
      <div id="window">
      </div>
        <form action="./Php/sendID.php" method="post" id="loginForm">
            Login &nbsp &nbsp&nbsp&nbsp: <input type="text" name="login"><br>
            Password: <input type="text" name="password"><br>
            <input type="submit" value="Valider">
        </form>
        </div>`);

    function TitleCard()
    {
        that = this;
        this.player = new Player();
    }

    function destroy()
    {
      $("#grid").empty();
    }

    function logged(data){

				Player.prototype.data = data;
        that.player.getHand();
        Player.prototype.gm = new GameManager();
        destroy();
		}

    function failure(jqxhr, textStatus, error)
		{
			console.log("doFailed :", jqxhr.status, textStatus, error);
		}

    function login()
		{
			var recupFormLogin = {'login':$("input[name='login']").val(), 'password':$("input[name='password']").val()};

			$.ajax({
				 url : $("form").prop('action'), // url du script à interroger
					type : 'post',
					data : recupFormLogin,
          dataType: 'json',
					success : logged,
					error : failure
			});
		}

    TitleCard.prototype.init = function()
    {
      SoundFX.initSound();
      SoundFX.playSound("uiloop");
      $('#grid').append(that.display);
      $("#loginForm").submit(function(pEvent) {
				pEvent.preventDefault();
      });
      $("input[type='submit']").on('click', function() {
          login();
      });
    }

		return TitleCard;
});
