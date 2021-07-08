<?php 
require "connection.php";
$id =$_GET['id'];
$sql="DELETE FROM names WHERE id=$id";
$query = mysqli_query($db,$sql);
header('location: index.php')
?>