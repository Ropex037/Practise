<?php
require "connection.php";

$sql = "SELECT * FROM names";

$query = mysqli_query($db,$sql);

$result = mysqli_fetch_all($query,MYSQLI_ASSOC);
require "index.view.php"
?>
