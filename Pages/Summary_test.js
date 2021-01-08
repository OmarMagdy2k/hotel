var Res_ID ="";


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


var getSummary= new XMLHttpRequest();

getSummary.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200 ) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("room#").textContent = myObj.roomNum;
    }
};


getSummary.open('GET','getSummary.php',true);
getSummary.send(Res_ID);

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
    adminPart();
}
/* php json
{
    roomNum: 1,
    floorNum: 5,
    Res_id: 5,

}*/