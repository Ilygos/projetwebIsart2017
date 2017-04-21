/*define(['jquery-ui'], function() {
    $('div').addClass('white');
});*/

define(['jqueryUI'], function(){
    var id;
    function card()
    {
        id = setInterval(function(){ 
        $('.hand_card').draggable({
        revert: true,
        containment : 'window',
        })
     });
    }
    
    

		return card;
});
console.log("hey");


