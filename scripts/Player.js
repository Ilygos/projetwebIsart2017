
define(['jquery'], function($){
		Player.prototype.id = 0;


		function Player()
		{
			Player.instance = this;
			init();
		}


		function logged(data){
			Player.instance.id = data;
			getHand();
		}


		function login()
		{
			var recupFormLogin = {firstName:$("input[name='firstName']").val(), lastName:$("input[name='lastName']").val()};

			$.ajax({
				 url : $("form").prop('action'), // url du script à interroger
					type : 'post',
					data : recupFormLogin,
					success : logged
					error : failure
			});
		}

		function parseHand(data)
		{
			Player.instance.hand = data;
		}

		function getHand()
		{
			$.ajax({
				url : urlPhpFile,
	            dataType : 'json',
				success : parseHand,
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
