<?php 
require 'connection.php';
$name = $_POST['name'];
$sport = $_POST['sport'];
$id = $_POST['id'];
$sql = "UPDATE names SET name = '$name', sport = '$sport' WHERE id= $id";
$query = mysqli_query($db,$sql);
header("LOCATION: index.php");

?>