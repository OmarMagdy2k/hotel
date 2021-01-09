<?php
$host = "127.0.0.1:3322";
$user = "root";
$password = "";
$database = "online_hotel_reservation";
$connect = mysqli_connect($host, $user, $password, $database);

header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);

$first_name = $obj->firstname;
$last_name = $obj->lastname;
$mobile_number = $obj->phonenumber;
$birthday = $obj->birthday;
$SSN = $obj->SSN;
$email = $obj->email;
$address = $obj->address;
$pass = $obj->pass;
$sql = "insert into user ( first_name ,last_name ,email,SSN  ,mobile_number,address ,birthday,password )
    values('" . $first_name . "','" . $last_name . "','" . $email . "','" . $SSN . "','" . $mobile_number . "','" . $address . "','" . $birthday . "','" . $pass . "')";
$result =  mysqli_query($connect, $sql);

session_start();
// select user
$sql2 = "SELECT * FROM user WHERE email='$email' and password='$pass'";
$result2 = mysqli_query($connect, $sql2);
if (($row2 = mysqli_fetch_assoc($result2))) {
    $encodedUser = json_encode($row2);
    $_SESSION['user'] = $encodedUser;
    echo '1';
} else {
    echo "Error: Incorrect username or password.";
}

//close connection
mysqli_close($connect);
