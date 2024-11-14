const db = require('../config/db');

const Courrier = {
  create: (courrierData, callback) => {
    db.query('INSERT INTO courrier SET ?', courrierData, callback);
  },
  getAll: (callback) => {
    db.query('SELECT * FROM courrier', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM courrier WHERE id_courrier = ?', [id], callback);
  },
  update: (id, courrierData, callback) => {
    db.query('UPDATE courrier SET ? WHERE id_courrier = ?', [courrierData, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM courrier WHERE id_courrier = ?', [id], callback);
  }
};

module.exports = Courrier;
