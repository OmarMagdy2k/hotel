<?php
$host="127.0.0.1:3322";
$user="root";
$password="";
$database="online_hotel_reservation";
$connect=mysqli_connect($host,$user,$password,$database);
?>
<?php
//read from data 
$query= select res_Id ,room_number,floor_number,type,check_in,check_out,payment,first_name,last_name,total_price
from roomtype join rooms join reservation join user  
on ( roomtype.room_type_ID=rooms.room_type_ID
and reservation.room_ID=rooms.room_ID
and user.user_id=reservation.user_id);
$result=mysqli_query($connect,$query);
?>
  <?php
  //write from database
while ($row=mysqli_fetch_assoc($result))
{
  echo  "<tr><td>".$row['res_Id']. "</td><td>".$row['room_number']."</td><td>".$row['floor_number']."</td><td>".$row['type']."</td><td>".$row['check_in'].
 "</td><td>".$row['check_out']."</td><td>".$row['payment']."</td><td>".$row['first_name']."</td><td>".$row['last_name']."</td><td>".$row['total_price']."</td><td>"
      <a href="delete.php?res_Id='.$row['res_Id'].'">Delete</a>  "</td></tr>";
        ?>
        <?php 
        mysqli_free_result($result);
        ?>
         <?php
        mysqli_close($connect);
        ?>