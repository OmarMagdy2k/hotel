//connect database
<?php
$host="127.0.0.1:3322";
$user="root";
$password="";
$database="online_hotel_reservation";
$connect=mysqli_connect($host,$user,$password,$database);
?>
<?php
if(isset($_POST['done']))
{
    $check_in=$_POST['check in'];
    $check_out=$_POST['check out'];
    $no.guests=$_POST['Number Of Guestes'];
    $payment_way=$_POST['way'];
    $card_num=$_POST['card number'];
    $exp_date=$_POST['Expired Date'];
    $sql="insert into reservation( no_of_guests , check_in , check_out , payment)values('". $no.guests."','".$check_in."','".$check_out."','".$payment_way."') ";
    $sql1="insert into user(card_number ,exp_date) vaues('".$card_num."','".$exp_date."')";
    $result1=  mysqli_query($connect, $sql,$sql1);
    ?>
    //close connection
<?php
mysqli_close($connect);
?>