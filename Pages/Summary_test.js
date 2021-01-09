import *  as utils from "./utils.js";

var Res_ID ="";
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Request From PHP//
var getSummary= new XMLHttpRequest();

    getSummary.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            if (response.indexOf("Error") !== -1) {
                alert(response);
            } else {
                myObj = JSON.parse(response);
                document.getElementById("roomnumber").value=myObj.room_number;
                document.getElementById("floornumber").value=myObj.floor_number;
                document.getElementById("Res_id").value=myObj.reservation_id;
                document.getElementById("Checkin").value=myObj.check_in;
                document.getElementById("CheckOut").value=myObj.check_out;
                document.getElementById("PaymentType").value=myObj.payment;
                document.getElementById("Totalprice").value=myObj.total_price;
            };
        };
    getSummary.open('GET',"summary.php", true);
    getSummary.send(Res_ID);
}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Functions//
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//window onload//
window.onload = function(){
    utils.checkLogin();
    getSummary();
}
/* php json
{
    roomNum: 1,
    floorNum: 5,
    Res_id: 5,

}*/