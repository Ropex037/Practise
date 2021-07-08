<form action="update_record.php" method="post">
<input type="hidden" name="id" value="<?php echo $result['id'];?>">
<input type="text" name="name" value="<?php echo $result['name'];?>">
<input type="text" name="sport" value="<?php echo $result['sport'];?>">
<button type="submit">Update</button>
</form>