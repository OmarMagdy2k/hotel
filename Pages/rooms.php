<?php
$host="127.0.0.1:3322";
$user="root";
$password="";
$database="online_hotel_reservation";
$connect=mysqli_connect($host,$user,$password,$database);
?>
<?php
        //read from data 
        $query= select room_number,type,floor_number
        from roomtype join rooms   
        on ( roomtype.room_type_ID=rooms.room_type_ID);
        $result=mysqli_query($connect,$query);
        ?>
          <?php
          //write from database
        while ($row=mysqli_fetch_assoc($result))
        {
          echo  "<tr><td>".$row[' room_number']. "</td><td>".$row['type']."</td><td>".$row['floor_number']."</td><td>" 
         <a href="delete1.php?floor_number='.$row['floor_number'].'">Delete</a> "</td><td>" <a href="edit.php?floor_number='.$row['floor_number'].'">Edit</a>  "</td></tr>";
                ?>
                <?php 
                mysqli_free_result($result);
                ?>
                <?php
mysqli_close($connect);
?>