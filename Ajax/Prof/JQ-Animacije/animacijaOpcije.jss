$(document).ready(function(){
  $("#mojeDugme").click(function(){
    $('#block').animate({
         width:"70%",//konacna sirina je 70%
         opacity:0.1,//smanjujem opacity za 0.4
         marginLeft:"0.6in",//povecavam levu marginu za 0.6in
         fontSize:"3em",//konacna velicina fonta je 3em
         borderWidth:"10px"//konacna velicina bordera je 10px
    },
    {
         "complete":function(){
           alert('Animacija zavrsena');
           $('#block').attr("style","border:2px solid red");
         },
         "easing":"linear",
         "duration":2000
    });
  });
});