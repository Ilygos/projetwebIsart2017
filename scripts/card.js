/*define(['jquery-ui'], function() {
    $('div').addClass('white');
});*/

define(['jqueryUI'], function($){
    var id;
    function card()
    {
        //id = setInterval(function(){
        $( ".hand_card" ).draggable({
          addClasses: false
        });
     //});
    }



		return card;
});
console.log("hey");
