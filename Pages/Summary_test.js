import *  as utils from "./utils.js";

var qs = "";

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Request From PHP//
function getSummary() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            if (response.indexOf("Error") !== -1) {
                alert(response);
            } else {
                var myObj = JSON.parse(response);
                console.log(myObj);
                document.getElementById("roomnumber").textContent = myObj.room_number;
                document.getElementById("floornumber").textContent = myObj.floor_number;
                document.getElementById("Res_id").textContent = myObj.res_Id;
                document.getElementById("Checkin").textContent = myObj.check_in;
                document.getElementById("CheckOut").textContent = myObj.check_out;
                document.getElementById("PaymentType").textContent = myObj.payment;
                document.getElementById("Totalprice").textContent = myObj.total_price;
            };
        };
    }
    request.open('GET', "summary.php?res_Id=" + qs.res_Id, true);
    request.send();
}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Functions//
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//window onload//
window.onload = function () {
    utils.checkLogin();
    var query = window.location.search.substring(1);
    qs = utils.parse_query_string(query);

    getSummary();
}
