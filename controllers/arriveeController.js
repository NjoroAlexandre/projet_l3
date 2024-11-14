const Arrivee = require('../models/arrivee');

exports.createArrivee = (req, res) => {
  Arrivee.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json(result);
  });
};

exports.getAllArrivees = (req, res) => {
  Arrivee.getAll((err, arrivees) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(arrivees);
  });
};

exports.getArriveeById = (req, res) => {
  Arrivee.getById(req.params.id, (err, arrivee) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(arrivee);
  });
};

exports.updateArrivee = (req, res) => {
  Arrivee.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};

exports.deleteArrivee = (req, res) => {
  console.log(req.params.id);
  Arrivee.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).send();
  });
};
