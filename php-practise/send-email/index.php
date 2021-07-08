<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test mail</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <form action="mail.php" method="POST">
            <p>Name</p>
            <input type="text" name="name" placeholder="Name">
            <p>Email</p>
            <input type="text" name="email" placeholder="emali">
            <p>Message</p>
            <textarea name="message" rows="6" cols="26"></textarea><br>
            <input type="submit" value="submit"><input type="reset" value="clear">
        </form>
    </div>
</body>

</html>