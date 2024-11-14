const db = require('../config/db');

const Arrivee = {
  create: (arriveeData, callback) => {
    db.query('INSERT INTO arrivee SET ?', arriveeData, callback);
  },
  getAll: (callback) => {
    db.query('SELECT * FROM arrivee', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM arrivee WHERE id_arrivee = ?', [id], callback);
  },
  update: (id, arriveeData, callback) => {
    db.query('UPDATE arrivee SET ? WHERE id_arrivee = ?', [arriveeData, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM arrivee WHERE id_arrivee = ?', [id], callback);
  }
};

module.exports = Arrivee;
// INSERT INTO `courrier`(`id_courrier`, `nature_correspondance`, `numero_courrier`, `provenance`, `date_correspondance`, `texte`, `observation`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')