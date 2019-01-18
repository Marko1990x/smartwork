$(document).ready(function(){
       $("#mojeDugme").click(function(){
         var div = $("#OutputDiv");
         div.animate({width:'300px'}, "slow");
         div.animate({height: '300px', opacity: '0.8'}, "slow");
         div.animate({marginLeft: '150px', opacity: '0.4'}, "slow");
         div.animate({borderWidth: '10px', opacity: '0.8'}, "slow");
         div.animate({opacity: '0.5'}, "slow");
       });
     });


