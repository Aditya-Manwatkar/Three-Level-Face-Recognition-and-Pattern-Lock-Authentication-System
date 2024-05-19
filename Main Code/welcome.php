<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: http://localhost/level21/login2.html");
    exit();
}

echo "Welcome, " . $_SESSION['username'] . "!";
?>
