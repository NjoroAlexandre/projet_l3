const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Remplacez par votre nom d'utilisateur MySQL
  password: '', // Remplacez par votre mot de passe MySQL
  database: 'gestioncourrier'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

module.exports = db;
