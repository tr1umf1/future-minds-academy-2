const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "accsestest",
  database: "school",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL");
});

app.post("/students", (req, res) => {
  const { name, age, grade, gender } = req.body; // Added gender field

  if (!name || !age || !grade || !gender) {
    return res.status(400).send("All fields are required");
  }

  const query = "INSERT INTO students (name, age, grade, gender) VALUES (?, ?, ?, ?)"; // Updated query
  connection.query(query, [name, age, grade, gender], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(201).send("Student created successfully");
  });
});


app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, grade, gender } = req.body; // Added gender field

  if (!name || !age || !grade || !gender) {
    return res.status(400).send("All fields are required");
  }

  const query = "UPDATE students SET name = ?, age = ?, grade = ?, gender = ? WHERE id = ?"; // Updated query
  connection.query(query, [name, age, grade, gender, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.status(200).send("Student updated successfully");
  });
});


app.get("/students", (req, res) => {
  const { name, page = 1, limit = 10 } = req.query; // Default page=1 and limit=10 if not provided

  const offset = (page - 1) * limit; // Calculate the offset

  let query = "SELECT * FROM students";
  let queryParams = [];

  // If a name is provided, add a WHERE clause to filter by name
  if (name) {
    query += " WHERE name LIKE ?";
    queryParams.push(`%${name}%`);
  }

  // Add LIMIT and OFFSET for pagination
  query += " LIMIT ? OFFSET ?";
  queryParams.push(parseInt(limit), parseInt(offset)); // Add limit and offset to the query parameters

  connection.query(query, queryParams, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(result);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
