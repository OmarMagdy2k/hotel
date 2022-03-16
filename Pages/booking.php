<?php
//connect database
$host = "127.0.0.1:3322";
$user = "root";
$password = "";
$database = "online_hotel_reservation";
$connect = mysqli_connect($host, $user, $password, $database);

header("Content-Type: application/json; charset=UTF-8");

session_start();
$session_user = json_decode($_SESSION["user"], false);
//read from data 
$query= "SELECT room_number,floor_number,res_Id, check_in,check_out,payment,total_price
from  rooms join reservation
on  rooms.room_ID=reservation.room_ID
WHERE user_id=$session_user->user_id";
$result=mysqli_query($connect,$query);

$myArray = [];
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
  $myArray[] = $row;
}
echo json_encode($myArray);

//close connectio
mysqli_close($connect);
