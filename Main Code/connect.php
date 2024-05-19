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

// Retrieve data from the form submission
$user = $_POST['username'];
$email = $_POST['email'];
$pass = $_POST['password'];

// Prepare and bind the SQL statement to prevent SQL injection
$stmt = $conn->prepare("SELECT * FROM user WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result_check_email = $stmt->get_result();

// Check if email already exists
if ($result_check_email->num_rows > 0) {
    // Email address already exists in the database
    echo "Error: Email address already exists";
    $stmt->close();
    $conn->close();
    exit(); // Stop further execution
}

// Prepare and bind the SQL statement for insertion
$stmt = $conn->prepare("INSERT INTO user (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $user, $email, $pass);

// Execute the SQL statement
if ($stmt->execute()) {
    echo "New record created successfully";
    $stmt->close();
    $conn->close();
    header("Location: http://localhost/level21/register2.html");
    exit();
} else {
    echo "Error: " . $conn->error;
    $stmt->close();
    $conn->close();
    //header("Location: factor.php");
    exit();
}
?>
