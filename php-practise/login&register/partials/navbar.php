<body>
    <nav class="navbar navbar-expand navbar-light bg-light">
    <a href="index.php" class="navbar navbar-brand">Php App</a>
   <ul class="navbar-nav" style="padding-left: 1300px;">
   <?php if(isset($_SESSION['id'])): ?>
<li class="nav-item"><a href="logout.php" class="nav-link">Logout</a></li>
   <?php else: ?>
   <li class="nav-item"><a href="login.view.php" class="nav-link">Login</a></li>
   <li class="nav-item"><a href="register.view.php" class="nav-link">Register</a></li>
<?php endif ?>
   </ul>
   
    </nav>
