define(['jqueryUI', ''], function(UI){
    var id;
    
    function card(type)
    {
      $("#hand").append(display[type]);
      $(".handCard").draggable({
        revert: true,
        revertDuration: 200,
        containment: "document"
      });
    }



		return card;
});
