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



require(["jquery", "GameManager", "TitleCard" ], function($, GameManager, TitleCard){


	function init()
	{
		var titleCard = new TitleCard();
		titleCard.init();
	}


	$(document).ready(init);


});
