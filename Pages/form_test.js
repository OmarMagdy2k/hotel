import *  as utils from "./utils.js";
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//checkSubmit//
function checkSubmit() {
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;

    if (document.getElementById("FN").value === "") {
        alert("Please Enter Your First Name. ");
        return false;
    } else if (document.getElementById("LN").value === "") {
        alert("Please Enter Your Last Name. ");
        return false;
    } else if (document.getElementById("PN").value === "") {
        alert("Please Enter Your Phone Number. ");
        return false;
    } else if (document.getElementById("BD").value === "") {
        alert("Please Enter Your First Name. ");
        return false;
    } else if (document.getElementById("SSN").value === "") {
        alert("Please Enter Your First Name. ");
        return false;
    } else if (document.getElementById("address").value === "") {
        alert("Please Enter Your First Name. ");
        return false;
    } else if (document.getElementById("email").value === "") {
        alert("Please Enter Your Email. ");
        return false;
    } else if (pass === "") {
        alert("Please Enter Your Password . ");
        return false;
    } else if (cpass === "" && pass !== cpass) {
        alert("Please Confirm Your Password. ");
        return false;
    } else {
        return true;
    }
}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Functions//
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Request From PHP//
document.getElementById("signup").onclick = function () {
    if (!checkSubmit()) return;
    var obj = {
        firstname: document.getElementById("FN").value,
        lastname: document.getElementById("LN").value,
        phonenumber: document.getElementById("PN").value,
        birthday: document.getElementById("BD").value,
        SSN: document.getElementById("SSN").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
    };
    var dbParam = JSON.stringify(obj);

    var sendBooking = new XMLHttpRequest();
    sendBooking.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var restxt = this.responseText;
            if (restxt === "1") {
                window.open("home.html", "_self");
            } else {
                alert("Error: " + restxt);
            }
        }
    };
    sendBooking.open("POST", "form.php", true);
    sendBooking.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sendBooking.send("x=" + dbParam);
}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//window onload//
window.onload = function () {
    utils.checkLogin();
}