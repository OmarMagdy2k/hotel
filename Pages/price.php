<?php
$host = "127.0.0.1:3322";
$user = "root";
$password = "";
$database = "online_hotel_reservation";
$connect = mysqli_connect($host, $user, $password, $database);

$room_type_ID=$_GET['room_type_ID'];

//read from data 
$query="SELECT price_day from roomtype WHERE room_type_ID=$room_type_ID";
$result = mysqli_query($connect, $query);

//write from database
$row = mysqli_fetch_assoc($result) ;

echo json_encode($row);
//close connection
mysqli_close($connect);