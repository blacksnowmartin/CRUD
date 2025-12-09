<?php
include "db.php";
$id = $_GET['id'];

// Fetch existing data to pre-fill the form
$sql = "SELECT * FROM students WHERE id=$id";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

// Handle the update request
if (isset($_POST['update'])) {
    $name = $_POST['name'];
    $reg = $_POST['reg_number'];
    $course = $_POST['course'];

    $sql = "UPDATE students SET name='$name', reg_number='$reg', course='$course' WHERE id=$id";
    
    if (mysqli_query($conn, $sql)) {
        header("Location: index.php");
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">
    <h3>Edit Student</h3>
    <form method="post">
        <div class="mb-3">
            <label>Name</label>
            <input type="text" name="name" class="form-control" value="<?php echo $row['name']; ?>">
        </div>
        <div class="mb-3">
            <label>Registration Number</label>
            <input type="text" name="reg_number" class="form-control" value="<?php echo $row['reg_number']; ?>">
        </div>
        <div class="mb-3">
            <label>Course</label>
            <input type="text" name="course" class="form-control" value="<?php echo $row['course']; ?>">
        </div>
        <button type="submit" name="update" class="btn btn-success">Update Student</button>
        <a href="index.php" class="btn btn-secondary">Cancel</a>
    </form>
</body>
</html>