define(['jquery', 'Player'], function($, Player){
    var urlPhpFile = "../Php/fetchTurn.php";

    function Turn()
    {
        turn.that = this;
        init();
    }


    function fetchTurn(data)
    {
        turn.that.infos = data;
    }

    function init()
    {
        $.ajax({
  				url : urlPhpFile,
  	      dataType : 'json',
  				success : fetchTurn,
  				error: failure
  			});
    }


		return Turn;
});
