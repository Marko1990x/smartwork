var firstLastName = document.getElementById("name");
var firstLastNameArray = [];
var firstLastNameError = document.getElementById("greska");

var username = document.getElementById("user");
var password = document.getElementById("pass");
var confirmPassword = document.getElementById("potvrdi");

var telefon = document.getElementById("phone");
var telefonGreska = document.getElementById("greska2");

function proveriImePrezime() {
    var re = /^[a-zA-Z]+\s{1}[a-zA-Z]+$/;
    if(!re.test(firstLastName.value)) {
        firstLastNameError.textContent = " Molimo vas da ne unosite brojeve.";
    } else {
        firstLastNameError.textContent = "";
    }
}

function proveriTelefon() {
    var re = /^\d+$/;
    if (!re.test(telefon.value)) {
        telefonGreska.textContent = " Molimo vas ne unosite slova";
    } else {
        telefonGreska.textContent = "";
    }
}

var submitDugme = document.getElementById("reg");
submitDugme.addEventListener("click", function() {
    proveriTelefon();
    proveriImePrezime();
});

firstLastName.addEventListener("blur", function() {
    //proveriImePrezime();
     
    firstLastNameArray = firstLastName.value.split(" ");
    username.value = firstLastNameArray[0];
    password.value = firstLastNameArray[1];
});

confirmPassword.addEventListener("paste", function(e) {
    e.preventDefault();
    alert("Ne mozete da kopirate vas password");
});