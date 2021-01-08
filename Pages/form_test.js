document.getElementById("homepage").onclick = function () {
    window.open("home.html", "_self");
}
document.getElementById("bookingpage").onclick = function () {
    if (userId !== "") {
        window.open("bookingform.html", "_self");
    } else {
        alert("Please Log in First.");
    };
}

document.getElementById("profilepage").onclick = function () {
    if (userId !== "") {
        window.open("profile.html", "_self");
    } else {
        alert("Please Log in First.");
    };
}

document.getElementById("roomspage").onclick = function () {
    window.open("Rooms.html", "_self");
}

document.getElementById("reservationpage").onclick = function () {
    window.open("Reservation.html", "_self");
}

 function cheackSubmit() {
    document.getElementById("formcont").onsubmit= function(){
        if (document.getElementById("FN").value == "") {
            alert("Please Enter Your First Name. ");
            return false;
        } else if (document.getElementById("LN").value == "") {
            alert("Please Enter Your Last Name. ");
            return false;
        } else if (document.getElementById("PN").value == ""){
            alert("Please Enter Your Phone Number. ");
            return false;
        } else if (document.getElementById("BD").value == ""){
            alert("Please Enter Your First Name. ");
            return false;
        } else if (document.getElementById("SNN").value == "") {
            alert("Please Enter Your First Name. ");
            return false;
        } else if (document.getElementById("address").value == "") {
            alert("Please Enter Your First Name. ");
            return false;
        } else if (document.getElementById("email").value == "") {
            alert("Please Enter Your Email. ");
            return false;
        } else if (document.getElementById("pass").value == "") {
            alert("Please Enter Your Password . ");
            return false;
        } else if (document.getElementById("cpass").value == "") {
            alert("Please Confirm Your Password. ");
            return false;
        }  else {
            return true;
        }
    };
}

function adminPart() {
    if (userId === "1") {
        document.getElementById("roomspage").style.display = "block";
        document.getElementById("reservationpage").style.display = "block";
    } else {
        document.getElementById("reservationpage").style.display = "none";
        document.getElementById("roomspage").style.display = "none";
    }
    document.getElementById("roomspage").style.display = "none";
    document.getElementById("reservationpage").style.display = "none";
}

window.onload = function(){
    cheackSubmit();
    adminPart();
}
//php file (form.php)