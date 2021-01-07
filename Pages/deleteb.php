<?php
      $host="127.0.0.1:3322";
      $user="root";
      $password="";
      $database="online_hotel_reservation";
      $connect=mysqli_connect($host,$user,$password,$database);
      ?>
            <?php
//delete from data 
$query= "delete room_number,floor_number,res_Id, check_in,check_out,payment,total_price
from  rooms 
inner join rooms, reservation 
on (reservation.room_ID=rooms.room_ID)
WHERE res_Id=".$_GET['res_Id'];
$result=mysqli_query($connect,$query);
?>
        <?php
        mysqli_close($connect);
        ?>