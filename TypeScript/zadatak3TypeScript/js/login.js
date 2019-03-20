// part 2 the loggin button back and ok buttons
// <div id="second"><button id="okLoginButton">Ok</button><button id="backLoginButton">Back</button></div>
function backToIndex() {
    document.getElementById("backLoginButton").addEventListener("click", function () {
        location.replace("../index.html");
    });
}
backToIndex();
function toRegPage() {
    document.getElementById("okLoginButton").addEventListener("click", function () {
        location.replace("./registrationForm.html");
    });
}
toRegPage();
