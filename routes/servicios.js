const express = require("express");
const router = express.Router();
const serviciosController = require("../controllers/serviciosController");

// Middleware para procesar datos de formularios
router.use(express.urlencoded({ extended: true }));

// Rutas principales
router.get("/", serviciosController.mostrarTodos);
router.get("/crear", serviciosController.crear);
router.post("/", serviciosController.guardar);

// Rutas para servicios específicos
router.get("/:id", serviciosController.mostrarUno);
router.get("/:id/editar", serviciosController.editar);
router.post("/:id/actualizar", serviciosController.actualizar);
router.get("/:id/cambiar-estado", serviciosController.cambiarEstado);
router.post("/:id/actualizar-estado", serviciosController.actualizarEstado);
router.get("/:id/eliminar", serviciosController.eliminar);

module.exports = router;