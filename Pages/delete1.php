<?php
      $host="127.0.0.1:3322";
      $user="root";
      $password="";
      $database="online_hotel_reservation";
      $connect=mysqli_connect($host,$user,$password,$database);
      ?>
            <?php
            //delete from data 
            $query= "delete room_number,type,floor_number
            from rooms
            inner join roomtype, rooms 
            on ( roomtype.room_type_ID=rooms.room_type_ID
            )
            where room_number=".$_GET['room_number'];
            $result=mysqli_query($connect,$query);
            ?>
<?php
        mysqli_close($connect);
        ?>