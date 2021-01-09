<?php
$host = "127.0.0.1:3322";
$user = "root";
$password = "";
$database = "online_hotel_reservation";
$connect = mysqli_connect($host, $user, $password, $database);
$roomtype=$_POST['roomtype'];
//read from data 
$query="SELECT  price_day,price_weekend from roomtype WHERE type=.$roomtype";
$result = mysqli_query($connect, $query);

//write from database
while ($row = mysqli_fetch_assoc($result)) {
$price_day = $row['price_day'];
$price_weekend = $row['price_weekend'];
}
echo json_encode($row);
//close connection
mysqli_close($connect);