////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Header buttons//
import *  as utils from "./utils.js";
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//Request From PHP//

function fillUserProfile(userObj) {
    if (userObj !== "" && userObj.user_id !== "") {
        document.getElementById("email").textContent = userObj.email;
        document.getElementById("FN").textContent = userObj.first_name;
        document.getElementById("LN").textContent = userObj.last_name;
        document.getElementById("SNN").textContent = userObj.SSN;
        document.getElementById("password").textContent = userObj.password;
        document.getElementById("cardnum").textContent = userObj.card_number;
        document.getElementById("birth").textContent = userObj.birthday;
    }
}

function getProfile() {
    var logIn = new XMLHttpRequest();
    logIn.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = "";
            console.log(this.responseText);
            if (this.responseText !== "") {
                myObj = JSON.parse(this.responseText);
            }
            fillUserProfile(myObj);
        }
    };
    logIn.open('GET', "getSessionUser.php", true);
    logIn.send();
}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//window onload
window.onload = function () {
    utils.checkLogin();
    getProfile();
}