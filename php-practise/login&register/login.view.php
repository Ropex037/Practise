<?php require "partials/head.php" ;?>
<?php require "partials/navbar.php" ?>
<div class="container">
<div class="row">
<div class="col-6 offset-md-3">
<form action="login.php" method="post">
<input type="email" name="email" placeholder="email" class="form-control"><br>
<input type="password" name="password" placeholder="password" class="form-control"><br>
<button type="submit" class="btn btn-info form-control">login</button>
</form>
</div>
</div>
</div>
<?php require "partials/footer.php" ?>