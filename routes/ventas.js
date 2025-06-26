const express = require('express');
const router = express.Router();

// Lista de ventas
router.get('/', (req, res) => {
  res.send(`
    <h1>💰 Gestión de Ventas - Amek th</h1>
    <h2>Control de ventas y facturación</h2>
    
    <h3> Funcionalidades:</h3>
    <ul>
      <li>Registro de nuevas ventas</li>
      <li>Historial de ventas</li>
      <li>Generación de facturas</li>
      <li>Reportes de ingresos</li>
      <li>Control de pagos</li>
    </ul>
    
    <h3>➕ Nueva Venta:</h3>
    <p>Aquí irá un formulario para registrar ventas</p>
    
    <h3> Reportes:</h3>
    <ul>
      <li>Ventas del día</li>
      <li>Ventas del mes</li>
      <li>Productos más vendidos</li>
      <li>Ingresos totales</li>
    </ul>
    
    <h3>🔗 Navegación:</h3>
    <ul>
      <li><a href="/amek"> Volver a Amek th</a></li>
      <li><a href="/productos">📦 Ver Productos</a></li>
      <li><a href="/servicios">🔧 Ver Servicios</a></li>
      <li><a href="/clientes"> Ver Clientes</a></li>
      <li><a href="/"> Página Principal</a></li>
    </ul>
  `);
});

module.exports = router;