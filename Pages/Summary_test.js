//var res_ID = ;
var getSummary= new XMLHttpRequest();

getSummary.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200 ) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("room#").textContent = myObj.roomNum;
    }
};


getSummary.open('GET','getSummary.php',true);
getSummary.send(res_ID);

/* php json
{
    roomNum: 1,
    floorNum: 5,
    res_id: 5,

}*/