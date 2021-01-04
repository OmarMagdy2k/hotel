var demo1 ;
/////////////////////////////////
if ( condition  ) //<,>,==,===,!=,!==,&&(and),||(or)
{
    // code 
} else {

}
/////////////////////////////////
/*

remainder % 

+=,-=,/=,*=
++,--,

condition ? true : false ;

*/
/////////////////////////////////
/* 
alart 
console.log
console.info
console.error
console.warn
*/
/////////////////////////////////
while (condition){
    //code 
}
////////////////////////
do {
    //code
}while(condition);
/////////////////////////////////
for (var i=1 ;i<10;i++){
    //code
}
/////////////////////////////////
//define
function loging ( /* var*/ ) {

}
//calling
loging  ( /* value */ );
/////////////////////////////////
var X =[]; // array
var X1= new Array (); // array is object
var X2= Array ();
var X3= Array (5);
console.log(X.length);// get lenght 
/////////////////////////////////س
Number // make the var numver
isNaN // ask if the var is'n number
!isNaN // ask if the var is number
/////////////////////////////////
spilt (" "); // spilt the string after every " "
indexOF ("") // cheack if word is exsist in the string (flase = -1),(true = send the index)
Slice("steps","number of char will take")
Date();// for current data and time 
Date(year,month,day,hours, minutes,second);
/////////////////////////////////
//object 
//creating two object
var customer1 = {name : "omar", ID: 450 , password : 000}; 
var customer2 = {name : "kholoud", ID: 451 , password : 111};

function customerDetails(){
    // display information about each customer
    console.log(this.name + "his ID : " + this.ID + "password : " + this.password) 
}
//get details of customers
customer1.logDetails=customerDetails;
customer2.logDetails=customerDetails;
//calling for function 
customer1.logDetails();
customer2.logDetails();
/////////////////////////////////

/// Node Types ///
Node.ELEMENT_NODE;
Node.ATTRIBUTE_NODE;
Node.TEXT_NODE;
/////////////////////////////////

myElement.getAttribute("attribute name");
myElement.getAttribute("attribute name","value");
/////////////////////////////////

document.getElementById("id"); //var 
document.getElementsByTagName(""); // array
document.getElementsByClassName( );
document.queryCommandValue();
document.querySelectorAll( );
////////////////////////////////

//////Creating DOM content//////
/* 
1-create the element
2-add it to the doc
*/
/*var "name " = */document.createElement("element type");   //create element
/* "name" . */innerHTML= "the edit i want" ;    // the new text i want to add
document.getElementById("element id").appendChild(/* name.var of element */);  //add the element that we created to doc

/*var "name " = */document.createTextNode("new list item text");  //create text node
/*new element .*/appendChild(/*name.var of next */); // add the next as child node to the new element
document.getElementById("element id").appendChild(/*new element */); // add the text to doc
/////////////////////////////////

Node.innerHTML; // edit the HTML text 
Node.outerHTML;
Node.innterText;
/* "name" . */insertBefore(/*element i want to add  */,/*element i want it before */);
/////////////////////////////////

/////////////Events//////////////
onload
onclick
onmouseover
onblur
onfocus
onsubmit
onchange

setTimeout(() => {
    
}, timeout);
setTimeout

setInterval(() => {
    
}, interval);
setInterval
        /////////////
myElement.onclick= function() {


};

window.onload = function() {


};

"variable".onfocus = function(){

};

"variable".onblur = function(){

};
        /////////////
document.addEventListener('click',myFunction,false)
/////////////////////////////////

document.createElement();
document.createTextNode();
/*var name */.src = // photo place in pc 
/*var name */.alt = // photo's title 
/////////////////////////////////
////////////////Form/////////////
document.forms./*formname*/./*name of the element */
