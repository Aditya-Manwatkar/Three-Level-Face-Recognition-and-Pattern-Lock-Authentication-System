<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pattern</title>
    <link rel="stylesheet" href="style1.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>

<body>
    <style>
        body {
            background-image: url(image/torigate2.jpg);
        }
    </style>

    <header>
        <h2 class="logo">Logo</h2>
        <nav class="navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>

    <div class="row">
        <div class="col-md-4 col-md-offset-4 text-center">
            <canvas id="mycanvas" width="350" height="350" class="glowing-border">
                Sorry, your browser doesn't support Canvas.
            </canvas>
        </div>
        <div class="col-md-4 col-md-offset-4 text-center">
            <p id="Browser"> Selected File Will Be Shown Here</p>
        </div>
    </div>

    <div class="col-md-4 col-md-offset-4 text-center">
        <!-- Hidden input field for file selection -->
        <input type="file" id="fileInput" style="display: none;">
        <!-- Button to trigger file input -->
        <button id="browseButton" class="btn btn-primary">Browse Files</button>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="login3.js"></script>
    <script>
        var dots = 9;
        // Your existing JavaScript code for pattern authentication goes here
        // Make sure to include the necessary functions and variables from login3.js
    </script>
    <script>
    $(document).ready(function () {
        // Event listener for browse button
        $("#browseButton").on('click', function () {
            // Trigger the file input field
            $("#fileInput").trigger('click');
        });

        // Event listener for file input change
        $("#fileInput").on('change', function () {
            var file = this.files[0];
            // Update the text of the <p> element to show the selected file name
            $("#Browser").text("Selected File: " + file.name);

            // Create a FormData object to send the file via AJAX
            var formData = new FormData();
            formData.append('pdfFile', file);

            // Append the id to the formData
            formData.append('id', "<?php echo isset($_GET['id']) ? $_GET['id'] : ''; ?>");

            // Send the file to the server via AJAX
            $.ajax({
                url: 'save_pdf.php',
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function(response) {
                    alert('PDF saved successfully');
                },
                error: function(xhr, status, error) {
                    // Handle AJAX errors
                    console.error('Error:', error);
                }
            });
        });
    });
</script>

        
</body>
</html>
