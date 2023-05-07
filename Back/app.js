const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = new sqlite3.Database('./login.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

app.get('/market', (req, res) => {
  res.sendFile(__dirname + '/market.html');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else if (!row) {
      res.status(401).send('Invalid email or password');
    } else {
      res.send('Login successful');
    }
  });
});

app.post('/register', (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      console.log(`A row has been inserted with rowid ${this.lastID}`);
      res.send('Registration successful');
    }
  });
});

app.get('/market/categories', (req, res) => {
  db.all('SELECT DISTINCT category FROM market', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.send(rows);
    }
  });
});

app.get('/market/products/:category', (req, res) => {
  const category = req.params.category;
  db.all('SELECT name, price, level FROM market WHERE category = ?', [category], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.send(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});