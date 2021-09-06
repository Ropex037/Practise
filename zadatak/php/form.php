<?php
$From_ZIP = $_POST['From-ZIP'];
$To_ZIP = $_POST['To-ZIP'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$select = $_POST['select'];



$formcontent = "From: $name \n From-zip:$From_ZIP \n TO-ZIP:$To_ZIP \n Phone:$phone \n Date:$date \n Select:$select";
$recipient = "random@mail.com"; //  Ovde bi isla adresa sajta
$subject = "Quotes Form";
$mailheader = "From:$email\r\n";
mail($recipient,$subject,$formcontent,$mailheader) or die('Error!'); 
echo "Thank You!";

header("Location:index.html");

?>