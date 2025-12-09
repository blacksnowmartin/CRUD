<?php include "db.php"; 

// --- CREATE OPERATION ---
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $reg = $_POST['reg_number'];
  $course = $_POST['course'];

  $sql = "INSERT INTO students (name, reg_number, course) VALUES ('$name', '$reg', '$course')";
  mysqli_query($conn, $sql);
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>CRUD Project</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">

  <h2 class="text-center">Student Management System</h2>

  <div class="card p-4 mb-5 shadow-sm">
    <form method="post">
      <div class="mb-3">
        <label>Student Name</label>
        <input type="text" name="name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label>Registration Number</label>
        <input type="text" name="reg_number" class="form-control" required>
      </div>
      <div class="mb-3">
        <label>Course</label>
        <input type="text" name="course" class="form-control" required>
      </div>
      <button type="submit" name="submit" class="btn btn-primary">Add Student</button>
    </form>
  </div>

  <table class="table table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Reg No</th>
        <th>Course</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <?php
      $sql = "SELECT * FROM students";
      $result = mysqli_query($conn, $sql);

      while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
          <td>{$row['id']}</td>
          <td>{$row['name']}</td>
          <td>{$row['reg_number']}</td>
          <td>{$row['course']}</td>
          <td>
            <a href='edit.php?id={$row['id']}' class='btn btn-warning btn-sm'>Edit</a>
            <a href='delete.php?id={$row['id']}' class='btn btn-danger btn-sm'>Delete</a>
          </td>
        </tr>";
      }
      ?>
    </tbody>
  </table>

</body>
</html>