
define(['jquery', 'Turn', 'GameManager'], function($, Turn, GameManager){
		Player.prototype.id = 0;
		Player.prototype.data = [];
		Player.prototype.gm;
		var that;

		function Player()
		{
			that = this;
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
			var urlPhpFile = "./Php/fetchHand.php?ID="+Player.prototype.data['ID_Player'];

			$.ajax({
				url : urlPhpFile,
	      dataType : 'json',
				success : fetchHand,
				error: failure
			});

		}

		Player.prototype.refreshHand = function()
		{
			var urlPhpFile = "./Php/fetchHand.php?ID="+Player.prototype.data['ID_Player'];

			$.ajax({
				url : urlPhpFile,
	      dataType : 'json',
				success : function (data)
				{
					Player.prototype.hand = data;
				},
				error: failure
			});

		}

		return Player;
});
