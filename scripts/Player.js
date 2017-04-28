
define(['jquery', 'Turn', 'GameManager'], function($, Turn, GameManager){
		Player.prototype.id = 0;
		Player.prototype.data = [];
		Player.prototype.gm;
		var that;
		var urlPhpFile = './Php/fetchHand.php';

		function Player()
		{
			that = this;
		}

		function Play()
		{
			//var turn = new Turn();
		}




		function failure(jqxhr, textStatus, error)
		{
			console.log("doFailed :", jqxhr.status, textStatus, error);
		}

		function fetchHand(data)
		{
			Player.prototype.hand = data;
			Player.prototype.gm.init();
		}

		Player.prototype.getHand = function()
		{
			console.log(Player.prototype.data['ID_Player']);
			urlPhpFile += "?ID="+Player.prototype.data['ID_Player'];
			console.log(urlPhpFile);

			$.ajax({
				url : urlPhpFile,
	      dataType : 'json',
				success : fetchHand,
				error: failure
			});

		}

		return Player;
});
