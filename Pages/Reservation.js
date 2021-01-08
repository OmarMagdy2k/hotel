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
