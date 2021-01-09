import *  as utils from "./utils.js";

var qs = "";
var dayPrice = 0;
var totalprice = 0;
var room_ID = "";
function getDayPrice() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            if (response.indexOf("Error") !== -1) {
                alert(response);
            } else {
                var myObj = JSON.parse(response);
                dayPrice = Math.floor(myObj.price_day);
                calculateTotalPrice();
            };
        };
    };
    request.open('GET', "price.php?room_type_ID=" + qs.room_type_ID, true);
    request.send();
}

document.getElementById("cash").onclick = function () {
    if (document.getElementById("cash").checked) {
        document.getElementById("creditpart").style.display = "none";
    }
};
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Request From PHP//
document.getElementById("submit").onclick = function () {
    if (!document.getElementById("cash").checked && !document.getElementById("credit").checked) {
        alert("Please Select Payment Way.");
        return;
    }
    if (totalprice === 0) {
        alert("Invalid Check-in & Check-out date");
        return;
    }
    var cin = document.getElementById("cin").value;
    var cout = document.getElementById("cout").value;
    var numofguests = document.getElementById("numofguests").value;
    var tp = totalprice;
    var card = document.getElementById("card").value;
    var exdate = document.getElementById("exdate").value;

    var payment = "cash";
    if (document.getElementById("credit").checked) {
        payment = "credit";
        if (card === "" || exdate === "") {
            alert("Required card information");
            return;
        }
    }
    if (numofguests === "" || numofguests === "0") {
        alert("Invalid Number of guests");
        return;
    }

    var obj = {
        cin: cin,
        cout: cout,
        tp: tp,
        numofguests: numofguests,
        card: card,
        exdate: exdate,
        payment: payment,
        room_ID: room_ID
    };
    console.log(obj);
    var dbParam = JSON.stringify(obj);

    var sendBooking = new XMLHttpRequest();
    sendBooking.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            if (response.indexOf("Error") !== -1) {
                alert(response);
            } else {
                var myObj = JSON.parse(response);
                console.log(myObj);
                window.open("Summary.html?res_Id=" + myObj.res_Id, "_self");
            };
        };
    };
    sendBooking.open("POST", "bookingForm.php", true);
    sendBooking.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sendBooking.send("x=" + dbParam);
}

function getAvailableRoom() {
    var cin = document.getElementById("cin").value;
    var cout = document.getElementById("cout").value;

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            if (response.indexOf("Error") !== -1) {
                alert(response);
            } else {
                var myObj = JSON.parse(response);
                room_ID = Math.floor(myObj.room_ID);
                console.log(room_ID);
            };
        };
    };
    request.open('GET', 'getAvailableRoom.php?room_type_ID=' + qs.room_type_ID + '&check_in=' + cin + '&check_out=' + cout, true);
    request.send();

}

function calculateTotalPrice() {
    totalprice = 0;
    var dateVal1 = document.getElementById("cin").value;
    var dateVal2 = document.getElementById("cout").value;
    if (dateVal1 !== "" && dateVal2 !== "") {
        const date1 = new Date(dateVal1);
        const date2 = new Date(dateVal2);
        var diffDays = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
        if (diffDays <= 0) {
            document.getElementById("tp").textContent = "Check-out date must be later than Check-in date";
            return;
        }
        totalprice = diffDays * dayPrice;
        document.getElementById("tp").textContent = totalprice;
        getAvailableRoom();
    } else {
        document.getElementById("tp").textContent = totalprice;
    }

}

document.getElementById("cin").onchange = function () {
    calculateTotalPrice();
}

document.getElementById("cout").onchange = function () {
    calculateTotalPrice();
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Functions//
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

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//window onload//
window.onload = function () {
    utils.checkLogin();
    var query = window.location.search.substring(1);
    qs = utils.parse_query_string(query);
    getDayPrice();
    creditPart();
};