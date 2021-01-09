<?php
session_start();
if(isset($_SESSION['user']) && !empty($_SESSION['user'])) {
   echo $_SESSION['user'];
} else {
    echo "";
}