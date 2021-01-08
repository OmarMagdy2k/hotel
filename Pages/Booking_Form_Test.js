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

document.getElementById("cash").onclick = function () {
    if (document.getElementById("cash").checked) {
        document.getElementById("creditpart").style.display = "none";
    }
};

document.getElementById("submit").onclick = function () {
    var cin = document.getElementById("cin").value;
    var cout = document.getElementById("cout").value;
    var numofguests = document.getElementById("numofguests").value;
    var tp = document.getElementById("tp").value;
    var cash = document.getElementById("cash").value;
    var credit = document.getElementById("credit").value;
    var card = document.getElementById("card").value;
    var exdate = document.getElementById("exdate").value;

    var sendBooking = new XMLHttpRequest();
    sendBooking.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var restxt = this.responseText;
            if (restxt == true) {
                window.open("Summary.html", "_self");
            } else {
                alert("Error.");
            }
        }else {
            alert("failed response");
        }
    };
    sendBooking.open('POST', 'bookingForm.php', true);
    sendBooking.send("check_in=" + cin + "&check_out=" + cout + "&noofguests=" + numofguests + "&tp=" + tp + "&cash=" + cash + "&credit=" + credit + "&card_num=" + card + "&exp_date=" + exdate );
}

function creditPart() {
    document.getElementById("credit").onclick = function () {
        if (document.getElementById("credit").checked) {
            document.getElementById("creditpart").style.display = "block";
        } else {
            document.getElementById("creditpart").style.display = "none";
        }
    };
    document.getElementById("creditpart").style.display = "none";
}

function cheackPayment() {
    document.getElementById("bookingfrom").onsubmit = function () {
        if (document.getElementById("cash").checked || document.getElementById("cash").checked) {
            return true;
        } else {
            alert("Please Select Payment Way.");
            return false;
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

window.onload = function () {
    creditPart();
    cheackPayment();
    adminPart();
};