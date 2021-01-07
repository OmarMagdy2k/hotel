<?php
      $host="127.0.0.1:3322";
      $user="root";
      $password="";
      $database="online_hotel_reservation";
      $connect=mysqli_connect($host,$user,$password,$database);
      ?>
            <?php
//delete from data 
$query= "delete res_Id ,room_number,floor_number,type,check_in,check_out,payment,first_name,last_name,total_price
from reservation
inner join roomtype, rooms, reservation, user  
on ( roomtype.room_type_ID=rooms.room_type_ID
and reservation.room_ID=rooms.room_ID
and user.user_id=reservation.user_id)
WHERE res_Id=".$_GET['res_Id'];
$result=mysqli_query($connect,$query);
?>
        <?php
        mysqli_close($connect);
        ?>