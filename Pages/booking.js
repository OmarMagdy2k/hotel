import *  as utils from "./utils.js";

function deleteBooking(res_Id) {

    var obj = {
        res_Id: res_Id
    };
    console.log(obj);
    var dbParam = JSON.stringify(obj);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getBooking();
        };
    };
    request.open("POST", "deleteReservation.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("x=" + dbParam);
}


function getBooking() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText !== "") {
                var myObj = JSON.parse(this.responseText);
                var txt = "<tr><th>Reservation-Id</th><th>Room Number</th><th>Floor Number</th><th>Check In</th><th>Check Out</th><th>Payment Way</th><th>Price</th><th>Delete</th></tr >";
                for (var x in myObj) {
                    txt += "<tr>"
                    txt += "<th>" + myObj[x].res_Id + "</th>";
                    txt += "<th>" + myObj[x].room_number + "</th>";
                    txt += "<th>" + myObj[x].floor_number + "</th>";
                    txt += "<th>" + myObj[x].check_in + "</th>";
                    txt += "<th>" + myObj[x].check_out + "</th>";
                    txt += "<th>" + myObj[x].payment + "</th>";
                    txt += "<th>" + myObj[x].total_price + "</th>";
                    txt += "<th><button name = 'deleteBtn' id='" + myObj[x].res_Id + "'>Delete</button></th>";
                    txt += "</tr>";
                }
                document.getElementById("table").innerHTML = txt;
                var inputs = document.getElementsByName("deleteBtn");
                for (var i = 0; i < inputs.length; i++) {
                    document.getElementById(inputs[i].id).onclick = function () {
                        deleteBooking(this.id);
                    }
                }
            }
        }
    };
    request.open('GET', "booking.php", true);
    request.send();
}


window.onload = function () {
    utils.checkLogin();
    getBooking();
}