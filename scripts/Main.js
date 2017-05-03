require.config({
	paths: {
		"jquery" : "../lib/jquery-3.1.1.min",
		"jqueryUI" : "../lib/jquery-ui.min",
		"howler" : "../lib/howler.core"
	},

	shim: {
        "jquery-ui": {
            exports: "UI",
            deps: ['jquery']
        }
    }
});



require(["jquery", "GameManager", "loader" ], function($, GameManager, Loader){

	var reset = setInterval(function(){
		if (obliterateTheWorldYouAreLivingIn){
			reset();
			obliterateTheWorldYouAreLivingIn = false;
		}
	}, 100);
	function failure(jqxhr, textStatus, error)
	{
		console.log("doFailed :", jqxhr.status, textStatus, error);
	}

	function reset(){
		$.ajax({
			 url : "./Php/reset.php ", // url du script à interroger
			 dataType:'json',
				success : function(data){
					console.log("Obliteration Complete : World Reset");
				},
				error : failure
		});
		$('#stage').empty();
		$('#loader').empty();
		$('#grid').empty();
		var loader = new Loader();
		loader.init();
	}
	function init()
	{

		var loader = new Loader();
		loader.init();
	}


	$(document).ready(init);


});
