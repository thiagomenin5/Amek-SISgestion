const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Middleware para procesar datos de formularios
router.use(express.urlencoded({ extended: true }));

// Rutas
router.get('/', productosController.mostrarTodos);
router.get('/crear', productosController.crear);
router.post('/', productosController.guardar);
router.get('/:id', productosController.mostrarUno);


module.exports = router;