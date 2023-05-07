// importando as bibliotecas necessárias
const express = require('express'); // framework para construir aplicativos web em Node.js
const sqlite3 = require('sqlite3').verbose(); // biblioteca para trabalhar com bancos de dados SQLite

// criando uma instância do app express
const app = express();

// importando a biblioteca axios para trabalhar com requisições HTTP
const axios = require('axios');

// definindo a porta do servidor
const port = 3000;

// definindo o ID da carteira (utilizado nas requisições)
const walletId = '1234';

// habilitando a decodificação de dados URL-encoded e JSON nos requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// criando uma instância do banco de dados SQLite
const db = new sqlite3.Database('./login.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
});

// rota para renderizar a página home.html
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

// rota para obter o saldo do usuário
app.get('/userBalance', (req, res) => {
  const cpf = req.body.cpf;
  balance = 0;
  // fazendo uma consulta SQL no banco de dados SQLite para obter o endereço da carteira do usuário
  db.get('SELECT addrres FROM users WHERE cpf = ?', [cpf], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else if (!row) {
      res.status(404).send('User not found');
    } else {
      const adr = row.addrres;
      // fazendo uma requisição HTTP para a API de carteira para obter o saldo da carteira do usuário
      axios.get('http://localhost:8000/wallet/address-info', {
        params: {
          'address': adr
        },
        headers: {
          'x-wallet-id': '1234'
        }
      })
        .then(response => {
          balance = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      // enviando o saldo como resposta
      res.send(`User balance: ${balance}`);
    }
  });
});

// rota para o login do usuário
app.post('/login', (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  // fazendo uma consulta SQL no banco de dados SQLite para verificar se o usuário existe e se as credenciais estão corretas
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

// This route handles the registration of a new user.
app.post('/register', (req, res) => {
  console.log(req.body);
  
  // Extract the email, password and cpf from the request body.
  const email = req.body.email;
  const password = req.body.password;
  const cpf = req.body.cpf
  
  // Initialize a variable to store the generated wallet address.
  let address = '';
  
  // Make a request to the wallet API to generate a new address.
  axios.get('http://localhost:8000/wallet/address', {
    params: {
      mark_as_used: true,
    },
    headers: {
      'x-wallet-id': '1234'
    }
  })
    .then(response => {
      // Extract the generated address from the response and remove any white space.
      console.log(response.data.address);
      address = response.data.address.replace(/\s+/g, "");
      
      // Insert the new user's information into the database.
      db.run('INSERT INTO users (email, password, cpf, addrres) VALUES (?, ?, ?, ?)', [email, password, cpf, address], function (err) {
        if (err) {
          console.error(err.message);
          res.status(500).send('Internal server error');
        } else {
          // If the user was successfully added to the database, send a success response.
          console.log(`A row has been inserted with rowid ${this.lastID}`);
          res.send('Registration successful');
        }
      });
    })
    .catch(error => {
      // If an error occurs, log the error and send an error response to the client.
      console.error(error);
      res.status(500).send('Internal server error');
    });
});

// Start the server and listen for incoming requests.
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});