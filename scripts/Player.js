
define(['jquery'], function($){
		Player.prototype.id = 0;
		var that;
		var urlPhpFile = './Php/fetchHand.php';

		function Player()
		{
			that = this;
			init();
		}


		function logged(data){
			that.id = data;
			getHand();
		}


		function failure(jqxhr, textStatus, error)
		{
			console.log("doFailed :", jqxhr.status, textStatus, error);
		}

		function login()
		{
			var recupFormLogin = {firstName:$("input[name='firstName']").val(), lastName:$("input[name='lastName']").val()};

			$.ajax({
				 url : $("form").prop('action'), // url du script à interroger
					type : 'post',
					data : recupFormLogin,
					success : logged,
					error : failure
			});
		}

		function fetchHand(data)
		{
			that.hand = data;
			console.log(that.hand.toString());
		}

		function getHand()
		{
			$.ajax({
				url : urlPhpFile,
	      dataType : 'json',
				success : fetchHand,
				error: failure
			});

		}



		function init()
		{
			// Prevent form submission
			$("form").submit(function(pEvent) {
				pEvent.preventDefault();
			});

			$("input[type='submit']").on('click', function() {
					$(this).off();
					login();
			});
		}


		return Player;
});
