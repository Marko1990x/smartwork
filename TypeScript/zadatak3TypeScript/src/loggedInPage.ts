function backToIndex2() {
    document.getElementById("backButton").addEventListener("click", function(){
        location.replace("../index.html");
    });

    // as per usual form is causing issues so i removed the tag
}
backToIndex2();