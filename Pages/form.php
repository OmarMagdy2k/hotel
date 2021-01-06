//connect database
<?php
$host="127.0.0.1";
$user="root";
$password="";
$database="online_hotel_reservation";
$connect=mysqli_connect($host,$user,$password,$database);
?>
<?php
    if(isset($_POST['sign up']))
{
$first_name=$_POST['First Name'];
    $Last_Name=$_POST['Last Name'];  
    $Phone_Number=$_POST['Phone Number']; 
    $Birthday=$_POST['Birthday']; 
    $SNN=$_POST['SNN']; 
    $email=$_POST['email']; 
    $address=$_POST['address'];
    $psw=$_POST['psw']; 
    $sql = "insert into user ( first_name ,last_name ,email,SSN  ,mobile_number,address ,birthday,password )
    values('".$first_name."','". $Last_Name."','".$email."','".$SNN."','". $Phone_Number."','".$address."','". $Birthday."','". $psw."')";
    $result=  mysqli_query($connect, $sql);
    if( $result){
        echo '</br>Data is inerted';
    } 
else {
die("Database query failed. " . mysqli_error($connection));
}}?>
//close connection
<?php
mysqli_close($connect);
?>
