
var elem = document.getElementById("elem");
elem.onmouseover = function(event) {
  
    alert("Dogadjaj je " +event.type + " na objektu DOM a " + event.currentTarget+" a ime taga je "+event.currentTarget.tagName);
   
};


