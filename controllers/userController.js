const User = require('../models/user');

exports.createUser = (req, res) => {
  User.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json(result);
  });
};

exports.getAllUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(users);
  });
};
exports.getOneUser = (req, res) => {
  // console.log(req.body.params)
  User.getOne((req.body.params, (err,user)=>{
    if (err) return res.status(500).json(err);
    res.status(200).json(user);
  }))
};

exports.getUserById = (req, res) => {
  User.getById(req.params.id, (err, user) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(user);
  });
};

exports.updateUser = (req, res) => {
  User.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};

exports.deleteUser = (req, res) => {
  User.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(204).send();
  });
};
