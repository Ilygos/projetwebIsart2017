define(["jquery", "Player", "card", "GameManager" ,"jqueryUI", "soundfx"], function($, Player, card, GameManager, UI, SoundFX){
  var id;
  var that;

    WinScreen.prototype.display = $(`<img id="logo" src="ressources/logo.png">
    <div id="container">
      <div id="window">
      </div>
        <form action="./Php/sendID.php" method="post" id="loginForm">
            Login &nbsp &nbsp&nbsp&nbsp: <input type="text" name="login"><br>
            Password: <input type="text" name="password"><br>
            <input type="submit" value="Valider">
        </form>
        </div>`);

    function WinScreen()
    {
        that = this;
        
    }

    function destroy()
    {
      $("#grid").empty();
    }

    

    function failure(jqxhr, textStatus, error)
		{
			console.log("doFailed :", jqxhr.status, textStatus, error);
		}

    

    WinScreen.prototype.init = function()
    {
      SoundFX.initSound();
      SoundFX.playSound("uiloop");
      $('#grid').append(that.display);
      
      });
    }

		return WinScreen;
});
