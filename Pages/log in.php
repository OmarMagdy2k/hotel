<?php
$host="127.0.0.1:3322";
$user="root";
$password="";
$database="online_hotel_reservation";
$connect=mysqli_connect($host,$user,$password,$database);
?>
<?php

$error = ""; //Variable for storing our errors.
if(isset($_POST["log in"]))
{
if(empty($_POST["email"]) || empty($_POST["password"]))
{
$error = "Both fields are required.";
}else
{
// Define $username and $password
$emaile=$_POST['email'];
$password=$_POST['password'];
//Check username and password from database
$sql="SELECT user_id FROM user WHERE email='$emaile' and password='$password'";
$result=mysqli_query($connect,$sql);
if(($row=mysqli_fetch_assoc($result)))
{
echo "done ";
}else
{
$error = "Incorrect username or password.";}
}
}
?>
<?php
mysqli_close($connect);
?>
