<?php
      $host="127.0.0.1:3322";
      $user="root";
      $password="";
      $database="online_hotel_reservation";
      $connect=mysqli_connect($host,$user,$password,$database);
      ?>
            <?php
            //edit 
            $roomtype=$_POST['roomtype'];
            $query= "update rooms set type='".roomtype."'
            where room_number=".$_GET['room_number'];
            if(isset($_POST['done'])){
            $result=mysqli_query($connect,$query);
            }?>          
<?php
        mysqli_close($connect);
        ?>