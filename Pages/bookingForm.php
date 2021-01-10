<?php
//connect database

$host = "127.0.0.1:3322";
$user = "root";
$password = "";
$database = "online_hotel_reservation";
$connect = mysqli_connect($host, $user, $password, $database);

header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);

$cin = $obj->cin;
$cout = $obj->cout;
$tp = $obj->tp;
$numofguests = $obj->numofguests;
$card = $obj->card;
$exdate = $obj->exdate;
$payment = $obj->payment;
$room_ID = $obj->room_ID;
session_start();
$session_user = json_decode($_SESSION["user"], false);
$sql = "insert into reservation(user_id, room_ID, no_of_guests, check_in, check_out, payment, total_price) 
values('" . $session_user->user_id . "','" . $room_ID . "','" . $numofguests . "','" . $cin . "','" . $cout . "','" . $payment . "','" . $tp . "')";
//$sql1 = "insert into user(card_number ,exp_date) values('" . $card_num . "','" . $exp_date . "')
  //WHERE user_id='" . $session_user->user_id ;
$result =  mysqli_query($connect,$sql);
//select reservation ID
$sql2 = "SELECT res_Id  from reservation WHERE user_id='" . $session_user->user_id . "' and room_ID='" . $room_ID . "' and check_in='" . $cin . "' and check_out='" . $cout . "'";
$result2 = mysqli_query($connect, $sql2);
if (($row2 = mysqli_fetch_assoc($result2))) {
    echo json_encode($row2);
} else {
    echo "Error: Failed to create reservation.";
}

//close connection
mysqli_close($connect);
