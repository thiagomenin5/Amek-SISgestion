const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');

// Middleware para procesar datos de formularios
router.use(express.urlencoded({ extended: true }));

// Rutas principales
router.get('/', ventasController.mostrarTodas);
router.get('/crear', ventasController.crear);
router.post('/', ventasController.guardar);

// Rutas para ventas específicas
router.get('/:id', ventasController.mostrarUna);
router.get('/:id/editar', ventasController.editar);
router.post('/:id/actualizar', ventasController.actualizar);
router.get('/:id/generar-factura', ventasController.generarFactura);
router.get('/:id/eliminar', ventasController.eliminar);

module.exports = router;