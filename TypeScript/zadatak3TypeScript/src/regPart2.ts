function indexPage() {
    document.getElementById("regButton2").addEventListener("click", function () {
        console.log(window.location.href);
        location.replace("../additionalAnnoyance/login.html")
    });
}
indexPage();