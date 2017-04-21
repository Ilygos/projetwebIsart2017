/*define(['jquery', 'Player'], function($, Player){
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


    function failure(jqxhr, textStatus, error)
		{
  			console.log("doFailed :", jqxhr.status, textStatus, error);
		}


    function core()
    {
        if(turn.that.infos["HasResolved"])
          fetchCardPlayed();
        else
    }



    function showResolve();
    {
        checkCards();
        if (!meteor) playTurn();
        else playMeteor();
    }


    function fetchCardPlayed()
    {
        var cardsId = {player1Card:turn.that.infos["Player1CardID"], player2Card:turn.that.infos["Player2CardID"]};
        $.ajax({
          url : "../Php/fetchCardPlayed.php"
          type : 'post',
          data : cardsId,
          dataType: 'json',
          success : function(data)
          {
            turn.that.cardInfo = data;
            showResolve();
          },
          error : failure
        });
    }


    function playTurn()
    {
        alert("Your turn !");
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
*/
