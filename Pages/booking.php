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
$query= select room_number,floor_number,res_Id, check_in,check_out,payment,total_price
from  rooms join reservation
on  rooms.room_ID=reservation.room_ID
WHERE user_id=.$userid;
$result=mysqli_query($connect,$query);
?>
//close connection
  <?php
  //write from database
while ($row=mysqli_fetch_assoc($result))
{
  echo  "<tr><td>".$row['res_Id']. "</td><td>".$row['room_number']."</td><td>".$row['floor_number']."</td><td>".$row['check_in']."</td><td>".$row['check_out'].
 "</td><td>".$row['payment']."</td><td>".$row['total_price']."</td><td>"
      <a href="deleteb.php?res_Id='.$row['res_Id'].'">Delete</a>  "</td></tr>";
        ?>
<?php
mysqli_close($connect);
?>
