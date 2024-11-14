const db = require('../config/db');

const User = {
  create: (userData, callback) => {
    db.query('INSERT INTO user SET ?', userData, callback);
  },
  getAll: (callback) => {
    db.query('SELECT * FROM user', callback);
  },
  getOne: (userData,callback) => {
    db.query('SELECT * FROM user WHERE mail= ? AND mot_de_passe=?',[userData.email, userData.password], callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM user WHERE id_user = ?', [id], callback);
  },
  update: (id, userData, callback) => {
    db.query('UPDATE user SET ? WHERE id_user = ?', [userData, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM user WHERE id_user = ?', [id], callback);
  }
};

module.exports = User;
