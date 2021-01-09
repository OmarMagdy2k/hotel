<?php
$host = "127.0.0.1:3322";
$user = "root";
$password = "";
$database = "online_hotel_reservation";
$connect = mysqli_connect($host, $user, $password, $database);

$res_id = $_GET['res_Id'];
//read from data 
$query = "SELECT room_number,floor_number,res_Id, check_in,check_out,payment,total_price
from  rooms join reservation
on  rooms.room_ID=reservation.room_ID
WHERE res_Id=$res_id";

$result = mysqli_query($connect, $query);
if (($row = mysqli_fetch_assoc($result))) {
  echo json_encode($row);
} else {
  echo "Error: Failed to get reservation summary.";
}

//close connection
mysqli_close($connect);