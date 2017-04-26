define(["jquery", "Player", "card", "GameManager" ,"jqueryUI"], function($, Player, card, GameManager, UI){
  var id;
  var that;

    TitleCard.prototype.display = $(`<h1 style="text-align: center;">Titre Ici !</h1>
      <div id="formContainer">
      </div>
        <form action="./Php/sendID.php" method="post" id="loginForm">
            Login &nbsp &nbsp&nbsp&nbsp: <input type="text" name="firstName"><br>
            Password: <input type="text" name="lastName"><br>
            <input type="submit" value="Submit">
        </form>`);

    function TitleCard()
    {
        that = this;
        this.player = new Player();
        init();
    }

    function destroy()
    {
      $("#grid").empty();
    }

    function logged(data){
			console.log(data);

				that.data = data;
        that.player.getHand();
        var gm = new GameManager();
				$("#stage").append(gm.display);
        destroy();
			//}
		}

    function failure(jqxhr, textStatus, error)
		{
			console.log("doFailed :", jqxhr.status, textStatus, error);
		}

    function login()
		{
			var recupFormLogin = {login:$("input[name='login']").val(), password:$("input[name='password']").val()};

			$.ajax({
				 url : $("form").prop('action'), // url du script à interroger
					type : 'post',
					data : recupFormLogin,
          dataType : 'json',
					success : logged,
					error : failure
			});
		}

    TitleCard.prototype.init = function()
    {
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
