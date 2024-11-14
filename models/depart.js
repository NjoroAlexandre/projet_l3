const db = require('../config/db');

const Depart = {
  create: (departData, callback) => {
    db.query('INSERT INTO depart SET ?', departData, callback);
  },
  getAll: (callback) => {
    db.query('SELECT * FROM depart', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM depart WHERE id_depart = ?', [id], callback);
  },
  update: (id, departData, callback) => {
    db.query('UPDATE depart SET ? WHERE id_depart = ?', [departData, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM depart WHERE id_depart = ?', [id], callback);
  }
};

module.exports = Depart;
