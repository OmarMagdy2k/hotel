function creditpart() {
    document.getElementById("credit").onclick = function () {
        if (document.getElementById("credit").checked) {
            document.getElementById("creditpart").style.display = "block";
        } else {
            document.getElementById("creditpart").style.display = "none";
        }
    };
    document.getElementById("creditpart").style.display = "none";
}

window.onload =function () {
    creditpart();
};