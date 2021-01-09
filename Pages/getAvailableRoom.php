<?php
$host = "127.0.0.1:3322";
$user = "root";
$password = "";
$database = "online_hotel_reservation";
$connect = mysqli_connect($host, $user, $password, $database);

$room_type_ID = $_GET['room_type_ID'];
$check_in = $_GET['check_in'];
$check_out = $_GET['check_out'];

//read from data 
$query = "SELECT room_ID from rooms WHERE room_type_ID='" . $room_type_ID . "' and room_ID not in (select room_ID from reservation where (check_in<='" . $check_in . "' and check_out >= '" . $check_in . "') or (check_in<='" . $check_out . "' and check_out >= '" . $check_out . "')) LIMIT 1";
$result = mysqli_query($connect, $query);

//write from database
if (($row = mysqli_fetch_assoc($result))) {
    echo json_encode($row);
} else {
    echo "Error: No Available rooms in the selected dates";
}
//close connection
mysqli_close($connect);
