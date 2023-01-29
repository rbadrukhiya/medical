<?php 
    
    $conn = mysqli_connect('localhost' , 'root' , '' , 'medical');
        
 header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$data = json_decode(file_get_contents('php://input'), true);
    if (isset($data)) {
     $email = $data['email'];
    $password = $data['password'];

    $select_data = "select * from register where email='$email' and password = '$password'";
    $query = mysqli_query($conn , $select_data);
    $count = mysqli_num_rows($query);
        if ($count == 1) 
        {
    echo json_encode($data);
        }
        else
        {
            echo "check your email or password";
        }
        }
   


 ?> 