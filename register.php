<?php

$name=$_POST["n"];
$email=$_POST["e"];
$p=$_POST["p"];

$conn=mysqli_connect("localhost","root","","db_projecta");

$ins="insert into register (name,email,password) values('$name','$email','$p')";

mysqli_query($conn,$ins);


?>