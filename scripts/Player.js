
define(['jquery', 'Turn', 'GameManager'], function($, Turn, GameManager){
		Player.prototype.id = 0;
		Player.data = [];
		var that;
		var urlPhpFile = './Php/fetchHand.php';

		function Player()
		{
			that = this;
		}

		function Play()
		{
			var turn = new Turn();
		}




		function failure(jqxhr, textStatus, error)
		{
			console.log("doFailed :", jqxhr.status, textStatus, error);
		}

		function fetchHand(data)
		{
			that.hand = data;
			console.log(that.hand.toString());
		}

		Player.prototype.getHand = function()
		{
			urlPhpFile += "?ID="+that.id;
			$.ajax({
				url : urlPhpFile,
	      dataType : 'json',
				success : fetchHand,
				error: failure
			});

		}

		return Player;
});
