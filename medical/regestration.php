<?php 

$conn = mysqli_connect('localhost' , 'root' , '' , 'medical');


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');


// $data = json_decode(file_get_contents('php://input'), true);

// if(isset($data))
// {
// $name = $data['name'];
// $email = $data['email'];
// $password = $data['password'];
// $contact = $data['contact'];


// 	$insert = "insert into register (name , email , password , contact) values ('$name' , '$email' , '$password' , '$contact')";
// 	$query = mysqli_query($conn , $insert);	
// }



// 	echo json_encode($data);

$image = $_FILES['image']['name'];
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$contact = $_POST['contact'];
$path = "image/" .$image;
move_uploaded_file($_FILES['image']['tmp_name'], $path); 
	echo $image;
	echo $name;
	echo $email;
	echo $password;
	echo $contact;

$insert = "insert into register (name , email , password , contact , image) values ('$name' , '$email' , '$password' , '$contact' , '$image')";

	mysqli_query($conn , $insert);	





 ?>