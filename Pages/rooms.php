<?php
//connect database
$host = "127.0.0.1:3322";
$user = "root";
$password = "";
$database = "online_hotel_reservation";
$connect = mysqli_connect($host, $user, $password, $database);

header("Content-Type: application/json; charset=UTF-8");

//read from data 
$query = "SELECT room_number,type,floor_number from roomtype join rooms on ( roomtype.room_type_ID=rooms.room_type_ID)";
$result = mysqli_query($connect, $query);

//write from database
while ($row = mysqli_fetch_assoc($result)) {
  $room_number = $row['room_number'];
  $roomtype = $row['type'];
  $floor_number = $row['floor_number'];
}
echo json_encode($row);
//close connection
mysqli_close($connect);
