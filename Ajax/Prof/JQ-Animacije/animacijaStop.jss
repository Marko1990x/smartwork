$(document).ready(function(){
  // Start animation
$( "#go" ).click(function() {
  $( ".block" ).animate({ left: "+=100px" }, 2000 );
});
 
// Stop animation when button is clicked
$( "#stop" ).click(function() {
  $( ".block" ).stop();
});
 
// Start animation in the opposite direction
$( "#back" ).click(function() {
  $( ".block" ).animate({ left: "-=100px" }, 2000 );
});

 
});

