<?php
//connect database

$host="127.0.0.1:3322";
$user="root";
$password="";
$database="online_hotel_reservation";
$connect=mysqli_connect($host,$user,$password,$database);

if(isset($_POST['done'])){
    $roomtype=$_POST['roomtype'];
    $userid=$_POST['userid'];
    $cash=$_POST['cash'];
    $credit=$_POST['credit'];
    $total_price=$_POST['tp'];
    $check_in=$_POST['cin'];
    $check_out=$_POST['cout'];
    $noofguests=$_POST['numofguests'];
    if (empty ($cash)) {
        $payment_way=$_POST['credit'];
    } else {
        $payment_way=$_POST['cash'];
    }
    $card_num=$_POST['card'];
    $exp_date=$_POST['exdate'];
    $sql="insert into reservation( no_of_guests , check_in , check_out , payment,total_price)values('". $noofguests."','".$check_in."','".$check_out."','".$payment_way."','" .$total_price."') 
    WHERE user_id=.$userid and type=.$roomtype";
    $sql1="insert into user(card_number ,exp_date) vaues('".$card_num."','".$exp_date."')
   WHERE user_id=.$userid";
    $result1=  mysqli_query($connect, $sql,$sql1);
    //select reservation ID
    $Res_ID= "SELECT res_Id  from reservation WHERE user_id=.$userid";
}
//close connection
mysqli_close($connect);