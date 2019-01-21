$(document).ready(function(){
  $("#mojeDugme").click(function(){
     $(".box")
            .animate({width: "300px"},1000)
            .animate({height: "300px"},2000)
            .animate({marginLeft: "150px"},1000)
            .animate({borderWidth: "10px"},1000)
            .animate({opacity: 0.5},1000);
  });
});