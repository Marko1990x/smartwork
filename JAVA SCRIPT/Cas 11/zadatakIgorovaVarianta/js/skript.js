function prvaValidacija(){
var imePrezime = document.getElementById("name").value;

    imePrezimeNiz = imePrezime.split(" ");
    var ime = document.getElementById("user");
    ime.value = imePrezimeNiz[0];
    var password = document.getElementById("pass");
    password.value = imePrezimeNiz[1];
    var imeIPrezime = [ime.value, password.value];
    return imeIPrezime;
}

document.getElementById("pass").addEventListener("mousedown", function(event){
    event.preventDefault();
    alert("Ne mozete da kopirate vas password");
});


function drugaValidacija(){
var brTelefona = parseFloat(document.getElementById("phone").value);

if(isNaN(brTelefona)){
    document.getElementById("greska3").innerHTML = "Molimo vas da ne unoste slova";
} else {
    document.getElementById("greska3").innerHTML = "";
}
}


function submitForm(){
    var imeIPrezime = prvaValidacija();    
    if(!(isNaN(imeIPrezime[0])) || !(isNaN(imeIPrezime[1]))){
        document.getElementById("greska1").innerHTML = "Molimo vas ne unosite brojeve";
    }
    drugaValidacija();
}

document.getElementById("reg").addEventListener("click",submitForm);
 
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                