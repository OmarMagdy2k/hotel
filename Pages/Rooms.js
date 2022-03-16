////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Header buttons//
import *  as utils from "./utils.js";

function fillRooms(userObj) {
    if (userObj !== "" ) {
        document.getElementById("").textContent = userObj.room_number;
        document.getElementById("").textContent = userObj.type;
        document.getElementById("").textContent = userObj.floor_number;
    }
}

function getRooms() {
    var logIn = new XMLHttpRequest();
    logIn.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = "";
            console.log(this.responseText);
            if (this.responseText !== "") {
                myObj = JSON.parse(this.responseText);
            }
            fillRooms(myObj);
        }
    };
    logIn.open('GET', "rooms.php", true);
    logIn.send();
}

window.onload = function () {
    utils.checkLogin();
    getRooms();
}