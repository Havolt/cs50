<html>
<body>
        
    Thank you <?php echo $_POST["name"] ?>
    Name: <?php echo $_POST["name"] ?>
    Email: <?php echo $_POST["email"] ?>
    Password <?php echo $_POST["password"] ?>
    Comments <?php echo $_POST["Comments"] ?>

    <?php 
        if(!empty($_POST["interests"][0])) echo $_POST["interests"][0]." ";
        if(!empty($_POST["interests"][1])) echo $_POST["interests"][1]." ";
        if(!empty($_POST["interests"][2])) echo $_POST["interests"][2]." ";
    ?><br>


</body>
</html>