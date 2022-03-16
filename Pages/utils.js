export function initializeUI(userObj) {
    if (document.getElementById("login_form"))
        document.getElementById("login_form").style.display = "block";
    if (document.getElementById("logout"))
        document.getElementById("logout").style.display = "none";
    document.getElementById("bookingpage").style.display = "none";
    document.getElementById("profilepage").style.display = "none";
    document.getElementById("roomspage").style.display = "none";
    document.getElementById("reservationpage").style.display = "none";
    if (userObj !== "" && userObj.user_id !== "") {
        if (document.getElementById("login_form"))
            document.getElementById("login_form").style.display = "none";
        if (document.getElementById("logout"))
            document.getElementById("logout").style.display = "block";
        document.getElementById("bookingpage").style.display = "block";
        document.getElementById("profilepage").style.display = "block";
        var txt = "<h3> Hello, " + userObj.first_name + " " + userObj.last_name + "</h3>";
        if (document.getElementById("user"))
            document.getElementById("user").innerHTML = txt;
        if (userObj.is_admin === 1) {
            document.getElementById("roomspage").style.display = "block";
            document.getElementById("reservationpage").style.display = "block";
        }
    }
}

export function checkLogin() {
    var logIn = new XMLHttpRequest();
    logIn.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = "";
            console.log(this.responseText);
            if (this.responseText !== "") {
                myObj = JSON.parse(this.responseText);
            }
            initializeUI(myObj);
        }
    };
    logIn.open('GET', "getSessionUser.php", true);
    logIn.send();
}


export function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      // If first entry with this name
      if (typeof query_string[key] === "undefined") {
        query_string[key] = decodeURIComponent(value);
        // If second entry with this name
      } else if (typeof query_string[key] === "string") {
        var arr = [query_string[key], decodeURIComponent(value)];
        query_string[key] = arr;
        // If third or later entry with this name
      } else {
        query_string[key].push(decodeURIComponent(value));
      }
    }
    return query_string;
  }
  
  export function parseDate(str) {
    var mdy = str.split('/');
    return new Date(str);
}