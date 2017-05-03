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

var obliterateTheWorldYouAreLivingIn = false;


require(["jquery", "GameManager", "loader" ], function($, GameManager, Loader){

	function reset(){
		$.ajax({
			 url : "./Php/reset.php ", // url du script à interroger
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

	var teraforming = setInterval(function(){
		if (obliterateTheWorldYouAreLivingIn){
			clearInterval(teraforming);
			reset();
			obliterateTheWorldYouAreLivingIn = false;
		}
	}, 100);
	function failure(jqxhr, textStatus, error)
	{
		console.log("doFailed :", jqxhr.status, textStatus, error);
	}


	function init()
	{

		var loader = new Loader();
		loader.init();
	}


	$(document).ready(init);


});
