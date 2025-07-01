const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Middleware para procesar datos de formularios
router.use(express.urlencoded({ extended: true }));

// Rutas
router.get('/', clientesController.mostrarClientes);
router.get('/:id', clientesController.mostrarUno);
router.get('/crear', clientesController.crear);
router.post('/', clientesController.guardar);


module.exports = router;