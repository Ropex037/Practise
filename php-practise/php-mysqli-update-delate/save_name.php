<?php
require "connection.php";
$name = $_POST['name'];
$sport = $_POST['sport'];
$sql = "INSERT INTO names VALUES(NULL,'$name','$sport')";
$query = mysqli_query($db,$sql);

if($query){
    header('Location: index.php');
}
?>