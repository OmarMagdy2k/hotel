//connect database
<?php
$host="127.0.0.1:3322";
$user="root";
$password="";
$database="online_hotel_reservation";
$connect=mysqli_connect($host,$user,$password,$database);
?>
<?php
$userid=$_POST['userid'];
//read from data 
$query= select email,first_name,last_name,SSN, password,card_number,birthday
from  user join reservation
on  user.user_id=reservation.user_id
WHERE user_id=.$userid;
$result=mysqli_query($connect,$query);
?>
  <?php
  //write from database
while ($row=mysqli_fetch_assoc($result))
{
    $email=.$row['email'];
    $FN=.$row['first_name'];
    $LN=.$row['last_name'];
    $SNN=.$row['SSN'];
   $password =.$row['password'];
   $cardnum =.$row['card_number'];
   $birth=.$row['birthday'];
    ?>
//close connection
<?php
mysqli_close($connect);
?>
