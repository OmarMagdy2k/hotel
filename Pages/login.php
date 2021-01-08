<?php
$host = "127.0.0.1:3322";
$user = "root";
$password = "";
$database = "online_hotel_reservation";
$connect = mysqli_connect($host, $user, $password, $database);

if (empty($_GET["email"]) || empty($_GET["pass"])) {
    echo "Error: Both fields are required.";
} else {
    session_start();
    // Define $username and $password
    $email = $_GET['email'];
    $pass = $_GET['pass'];
    //Check username and password from database
    $sql = "SELECT * FROM user WHERE email='$email' and password='$pass'";
    $result = mysqli_query($connect, $sql);
    if (($row = mysqli_fetch_assoc($result))) {
        $_SESSION['user_id'] = $row['user_id'];
        echo json_encode($row);
    } else {
        echo "Error: Incorrect username or password.";
    }
}
mysqli_close($connect);
