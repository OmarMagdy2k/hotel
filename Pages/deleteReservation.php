<?php
$host = "127.0.0.1:3322";
$user = "root";
$password = "";
$database = "online_hotel_reservation";
$connect = mysqli_connect($host, $user, $password, $database);

header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);

//delete from data 
$query = "DELETE from reservation WHERE res_Id=" . $obj->res_Id;
$result = mysqli_query($connect, $query);
mysqli_close($connect);
