document.getElementById("bookingpage").onclick = function(){
    if (condition) {
        window.open("bookingform.html","_self");
    } else {
        alert("Please Log in First.");
    };
}

document.getElementById("profilepage").onclick = function(){
    if (condition) {
        window.open("profile.html","_self");
    } else {
        alert("Please Log in First.");
    };
}

document.getElementById("btn.sign").onclick = function(){
    if (condition) {
        window.open("Form.html","_self");
    } else {
        alert("Please Log in First.");
    };
}
document.getElementById("btn,log").onclick = function(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var logIn = new XMLHttpRequest();
    logIn.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

        }
    };

    logIn.open('GET','logIN.php',true);
    logIn.send("email=" + email + "&password="+password);
}