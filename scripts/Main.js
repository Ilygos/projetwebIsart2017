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


	function init()
	{
		var loader = new Loader();
		loader.init();
	}


	$(document).ready(init);


});
