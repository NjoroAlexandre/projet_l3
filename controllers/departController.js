const Depart = require('../models/depart');

exports.createDepart = (req, res) => {
  Depart.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json(result);
  });
};

exports.getAllDeparts = (req, res) => {
  Depart.getAll((err, departs) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(departs);
  });
};

exports.getDepartById = (req, res) => {
  Depart.getById(req.params.id, (err, depart) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(depart);
  });
};

exports.updateDepart = (req, res) => {
  Depart.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};

exports.deleteDepart = (req, res) => {
  Depart.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(204).send();
  });
};
