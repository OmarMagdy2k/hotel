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

document.getElementById("cash").onclick = function () {
    if (document.getElementById("cash").checked) {
        document.getElementById("creditpart").style.display = "none";
    }
};

document.getElementById("submit").onclick = alert("you clicked me");
/*document.getElementById("submit").onclick = function () {
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
        }
    };
    sendBooking.open('POST', 'bookingForm.php', true);
    sendBooking.send("check_in=" + cin + "&check_out=" + cout + "&noofguests=" + numofguests + "&tp=" + tp + "&cash=" + cash + "&credit=" + credit + "&card_num=" + card + "&exp_date=" + exdate );
}*/

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

window.onload = function () {
    creditPart();
    cheackPayment();
};