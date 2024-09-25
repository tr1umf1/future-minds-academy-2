const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "accsestest",
  database: "library",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL");
});

app.post("/books", (req, res) => {
    const { title, author, genre, year} = req.body;

    if (!title ||!author ||!genre ||!year) {
        return res.status(400).json({error: "All fields are required"});
    }
    
    const query = "INSERT INTO books (title, author, genre, year) VALUES (?, ?, ?, ?)";

    connection.query(query, [title, author, genre, year], (err, results) => {
        if(err) {
            res.status(err).json({error: err.message});
        }
        res.status(201).json({message: "Book added successfully", bookId: results.insertId});
    });
});

app.put("/books/:id", (req, res) => {
    const {id} = req.params;
    const {title, author, genre, year} = req.body;

      if (!title || !author || !genre || !year) {
        return res.status(400).json({ error: "Please provide all fields: title, author, genre, and year." });
    }

    const query = "UPDATE books SET title = ?, author = ?, genre = ?, year = ? WHERE id = ?";

     connection.query(query, [title, author, genre, year, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Book updated successfully!" });
  });
})

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM books WHERE id = ?";
  
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully!" });
  });
});

app.get("/books", (req, res) => {
  const { author } = req.query;

  let query = "SELECT * FROM books";
  let queryParams = [];

  if (author) {
    query += " WHERE author LIKE ?";
    queryParams.push(`%${author}%`);
  }

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
