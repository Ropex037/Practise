<?php require 'db.php'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>

<body>
<nav class="navbar navbar-expand navbar-light bg-light">
<a href="index.php" class="navbar-brand">Cars</a>
</nav>
<div class="container-fluid">
<div class="row">
<div class="col-8 offset-2">
<h3 class="display-4">Search cars</h3>
<form action="carInfo.php" method="get">
<div class="input-group">
<input type="text" name="search" class="form-control" placeholder="<?php if(isset($_GET['error'])){
    echo 'No match found';
}else{echo 'Search';};?>">
<div class="input-goup-append">
<button type="submit" name="subBtn" class="btn-info btn-lg">Search</button>
</div>
</div>
</form>
</div>
</div><br>
<div class="row">
<div class="col-8 offset-2">
<div class="row">
<?php foreach($db as $car): ?>
<div class="col-3">
<a href="carInfo.php?id=<?php echo $car['id']; ?>">
<div class="card text-center">
<div class="card-header text-center"><?php echo $car['brend'];?></div>
<div class="card-body"><?php echo $car['name'];?></div>
<div class="card-footer">
<button class="btn btn-primary btn-sm"><?php echo $car['price']."$";?></button>
<button class="btn btn-<?php 
if($car['used']){
    echo "warning";
}else{
    echo "success";
}
?> btn-sm"><?php 
if($car['used']){
    echo "used";
}else{
    echo "New";
}
?></button>
</div>
</div>
</a>
</div>
<?php endforeach;?>
</div>
</div>
</div>
</div>

</body>

</html>