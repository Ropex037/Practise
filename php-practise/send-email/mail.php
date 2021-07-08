<?php
$name = $_POST['name'];
$email = $_POST['email'];
$massage = $_POST['message'];
$formcontent = "From : $name \n Message: $massage";
$recipient = "korpa@gmail.com";
$subject = "Contact Form";
$mailheader ="From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die ("Error!");
echo "Thank you $name";

header("Location:https://index.php");