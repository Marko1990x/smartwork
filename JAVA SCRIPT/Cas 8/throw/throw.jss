//primer 1 - pozivam throw operator, 
function primer1() {
    
   var message,x;
    message = document.getElementById("message");
    message.innerHTML = "";//hocu da budem sigurna da je prazan i stavljam mu ""
    x = document.getElementById("demo").value;
    try { 
       y;
        if(x == "")  throw new Error("Unos je prazan");// throw je objekat koji formira Error objekat sa message "je prazan", Error je ovde naziv mog error-a tj name
        if(isNaN(x)) throw new Error("Unos nije broj");
        x = Number(x);//konverzija stringa u broj
        if(x > 10)   throw new Error("Unos je prevelik");
        if(x < 5)    throw new Error("Unos je premali");
         
    }
//    uvek kada je throw definisan mora se hvatati sa catch blokom
//    sa throw mi cemo proslediti objektu Error sta zelimo da bude ispisano kao greska 
    catch(err) {
        message.innerHTML = "Greska " + err.message;
       //ovde zelim da izvucem samo poruku iz Error/a
    }
   message.style.backgroundColor="red";
    
}