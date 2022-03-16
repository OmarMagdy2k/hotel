////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Request From PHP//
import *  as utils from "./utils.js";

function getRoomTypes() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var txt = "";
            for (var x in myObj) {
                txt += "<div id=" + myObj[x].room_type_ID + ">";
                txt += "<h1>" + myObj[x].type + "</h1>";
                txt += "<img src=\"" + myObj[x].img_src + "\"><br><br>";
                txt += "<label>" + myObj[x].describtion + "</label><br><br>";
                txt += "<a  href=\"bookingform.html?room_type_ID=" + myObj[x].room_type_ID + "&max_guest=" + myObj[x].max_guest + "\"><button id='booknow' >Book Now</button></a><br><br>"
                txt += "</div>";
            }
            document.getElementById("rooms").innerHTML = txt;
        }
    };
    request.open('GET', 'getRoomTypes.php', true);
    request.send();
}

document.getElementById("login").onclick = function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var logIn = new XMLHttpRequest();
    logIn.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            if (response.indexOf("Error") !== -1) {
                alert(response);
            } else {
                var myObj = JSON.parse(response);
                var txt = "<h3> Hello, " + myObj.first_name + " " + myObj.last_name + "</h3>";
                document.getElementById("user").innerHTML = txt;
                utils.initializeUI(myObj)
            }
        }
    };
    logIn.open('GET', "login.php?email=" + email + "&pass=" + password, true);
    logIn.send();
}

document.getElementById("logout_btn").onclick = function () {
    var logout = new XMLHttpRequest();
    logout.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            utils.initializeUI("");
        }
    };
    logout.open('GET', "logout.php", true);
    logout.send();
}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//window onload//
window.onload = function () {
    utils.checkLogin();
    getRoomTypes();
}