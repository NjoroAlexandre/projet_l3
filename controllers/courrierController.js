const Courrier = require('../models/courrier');

exports.createCourrier = (req, res) => {
  Courrier.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json(result);
  });
};

exports.getAllCourriers = (req, res) => {
  Courrier.getAll((err, courriers) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(courriers);
  });
};

exports.getCourrierById = (req, res) => {
  Courrier.getById(req.params.id, (err, courrier) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(courrier);
  });
};

exports.updateCourrier = (req, res) => {
  Courrier.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};

exports.deleteCourrier = (req, res) => {
  Courrier.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(204).send();
  });
};
