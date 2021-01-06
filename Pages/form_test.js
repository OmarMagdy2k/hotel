 function cheackSubmit() {
    document.getElementById("formcont").onsubmit= function(){
        if (document.getElementById("FN").value == "") {
            alert("Please Enter Your First Name. ");
            return false;
        } else if (document.getElementById("LN").value == "") {
            alert("Please Enter Your Last Name. ");
            return false;
        } else if (document.getElementById("PN").value == ""){
            alert("Please Enter Your Phone Number. ");
            return false;
        } else if (document.getElementById("BD").value == ""){
            alert("Please Enter Your First Name. ");
            return false;
        } else if (document.getElementById("SNN").value == "") {
            alert("Please Enter Your First Name. ");
            return false;
        } else if (document.getElementById("address").value == "") {
            alert("Please Enter Your First Name. ");
            return false;
        } else if (document.getElementById("email").value == "") {
            alert("Please Enter Your Email. ");
            return false;
        } else if (document.getElementById("pass").value == "") {
            alert("Please Enter Your Password . ");
            return false;
        } else if (document.getElementById("cpass").value == "") {
            alert("Please Confirm Your Password. ");
            return false;
        }  else {
            return true;
        }
    };
}

window.onload = function(){
    cheackSubmit();
}