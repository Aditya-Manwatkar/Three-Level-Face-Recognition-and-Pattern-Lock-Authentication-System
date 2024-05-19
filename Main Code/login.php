<?php
session_start();
require 'connect1.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prevent SQL injection
    $username = $conn->real_escape_string($username);
    $password = $conn->real_escape_string($password);

    // Hash the password if it is stored hashed in the database
    // $password = hash('sha256', $password); // Uncomment if using hashed passwords

    $sql = "SELECT id FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Login successful
        $_SESSION['username'] = $username;
        header("Location: welcome.php");
    } else {
        // Login failed
        echo "Invalid username or password";
    }

    $conn->close();
}
?>
