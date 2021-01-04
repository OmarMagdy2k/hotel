    $host="127.0.0.1";
    $user="root";
    $password="khaloud21k";
    $database="online_hotel_reservation";
    $connect=mysql_connect($host,$user,$password,$database);
    mysql_select_db($database);
    $first name=$_post[First Name];
    $Last Name=$_post[Last Name];  
    $Phone Number=$_post[Phone Number]; 
    $Birthday=$_post[Birthday]; 
    $SNN=$_post[SNN]; 
    $email=$_post[email]; 
    $address=$_post[address];
    $psw=$_post[psw]; 
    $sql="INSERT INTO user( first_name, last_name ,mobile_number, birthday , SSN,email,address,password)"VALUES('$first name',' $Last Name',' $Phone Number','$Birthday','$SNN','$email','$address','$psw');
    if($_post['Sign Up'])
    {mysql_query($sql);}
