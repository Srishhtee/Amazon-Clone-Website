const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'user_db'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
