<?php

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$database = "miniproject";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); // Added semicolon at the end
}

$stmt = $conn->prepare("SELECT id FROM user WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    // Login successful
    $_SESSION['username'] = $username;
    header("Location: welcome.php");
} else {
    // Login failed
    header("Location: welcome.php");
    echo "Invalid username or password";
}

$stmt->close();
$conn->close();

?>
