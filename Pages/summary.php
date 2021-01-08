//connect database
<?php
$host="127.0.0.1:3322";
$user="root";
$password="";
$database="online_hotel_reservation";
$connect=mysqli_connect($host,$user,$password,$database);

$res_id=$_POST['Res_ID'];
//read from data 
$query= "SELECT room_number,floor_number,res_Id, check_in,check_out,payment,total_price
from  rooms join reservation
on  rooms.room_ID=reservation.room_ID
WHERE res_Id=.$res_id";
$result= mysqli_query($connect,$query);
//write from database
while ($row=mysqli_fetch_assoc($result)){
  $email=$row['room_number'];
  $FN=$row['floor_number'];
  $LN=$row['res_Id'];
  $SNN=$row['check_in'];
  $password =$row['check_out'];
  $cardnum =$row['payment'];
  $birth=$row['total_price'];
}
  //close connection
mysqli_close($connect);