const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const courrierController = require('../controllers/courrierController');
const departController = require('../controllers/departController');
const arriveeController = require('../controllers/arriveeController');

// Routes pour User
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.post('/OneUser', userController.getOneUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Routes pour Courrier
router.post('/courriers', courrierController.createCourrier);
router.get('/courriers', courrierController.getAllCourriers);
router.get('/courriers/:id', courrierController.getCourrierById);
router.put('/courriers/:id', courrierController.updateCourrier);
router.delete('/courriers/:id', courrierController.deleteCourrier);

// Routes pour Depart
router.post('/departs', departController.createDepart);
router.get('/departs', departController.getAllDeparts);
router.get('/departs/:id', departController.getDepartById);
router.put('/departs/:id', departController.updateDepart);
router.delete('/departs/:id', departController.deleteDepart);

// Routes pour Arrivee
router.post('/arrivees', arriveeController.createArrivee);
router.get('/arrivees', arriveeController.getAllArrivees);
router.get('/arrivees/:id', arriveeController.getArriveeById);
router.put('/arrivees/:id', arriveeController.updateArrivee);
router.delete('/arrivees/:id', arriveeController.deleteArrivee);

module.exports = router;
