function getRoomTypes() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            var txt = "";
            for (x in myObj) {
                txt += "<div id=" + myObj[x].room_type_ID + ">";
                txt += "<h1>" + myObj[x].type + "</h1>";
                txt += "<img src=\"" + myObj[x].img_src + "\"><br><br>";
                txt += "<label>" + myObj[x].describtion + "</label><br><br>";
                txt += "<a href=\"bookingform.html?room_type_ID=" + myObj[x].room_type_ID + "&max_guest=" + myObj[x].max_guest + "\"><button>Book Now</button></a><br><br>"
                txt += "</div>";
            }
            document.getElementById("rooms").innerHTML = txt;
        }
    };
    request.open('GET', 'getRoomTypes.php', true);
    request.send();
}

document.getElementById("homepage").onclick = function () {
    window.open("home.html", "_self");
}

document.getElementById("signup").onclick = function () {
    window.open("Form.html", "_self");
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

document.getElementById("login").onclick = function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var logIn = new XMLHttpRequest();
    logIn.onreadystatechange = function () {
        console.log("readyState:" + this.readyState);
        console.log("status:" + this.status);
        console.log("statusText:" + this.statusText);
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            if (response.indexOf("Error") !== -1) {
                alert(response);
            } else {
                document.getElementById("login_form").style.display = "none";
                myObj = JSON.parse(response);
                var txt = "<h3> Hello, " + myObj.first_name + " " + myObj.last_name + "</h3>";
                document.getElementById("logout").style.display = "block";
                document.getElementById("user").innerHTML = txt;
            }
        }
    };
    logIn.open('GET', "login.php?email=" + email + "&pass=" + password, true);
    logIn.send();
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

function checkLogin() {
    var myvar = '<?php echo $session_value;?>';
    alert(myvar);
}

window.onload = function () {
    getRoomTypes();
    checkLogin();
    adminPart();
    // if (userId === "") {
    //     document.getElementById("logout").style.display = "none";
    // } else {
    //     document.getElementById("login_form").style.display = "block";
    // }
}