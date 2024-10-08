const express = require("express");
const mysql = require("mysql2");
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "accsestest",
  database: "ushtrime",
});

// const token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });
// console.log('JWT Token:', token);
// // Verifying the token
// const decoded = jwt.verify(token, 'secretKey');
// console.log('Decoded Token:', decoded);

