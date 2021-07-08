<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vezba</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand navbar-light bg-light">
    <a href="#" class="navbar-brand">Php vezba</a>
    <ul class="navbar-nav">
    <?php
    $links=["Home", "About", "Galety", "Contact"];
    
     ?>
     <?php
     for($i=0; $i<count($links); $i++) : ?>
<li class="nav-item"><a href="" class="nav-link"><?php echo $links[$i]; ?></a></li>
<?php endfor?>
</body>
</html>