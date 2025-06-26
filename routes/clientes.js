const express = require('express');
const router = express.Router();

// Lista de clientes
router.get('/', (req, res) => {
  res.send(`
    <h1>👥 Gestión de Clientes - Amek th</h1>
    <h2>Base de datos de clientes</h2>
    
    <h3> Funcionalidades:</h3>
    <ul>
      <li>Registro de nuevos clientes</li>
      <li>Historial de compras por cliente</li>
      <li>Información de contacto</li>
      <li>Estado de cuenta</li>
    </ul>
    
    <h3> Buscar Cliente:</h3>
    <p>Aquí irá un formulario para buscar clientes</p>
    
    <h3>➕ Agregar Cliente:</h3>
    <p>Aquí irá un formulario para agregar nuevos clientes</p>
    
    <h3>🔗 Navegación:</h3>
    <ul>
      <li><a href="/amek"> Volver a Amek th</a></li>
      <li><a href="/productos">📦 Ver Productos</a></li>
      <li><a href="/servicios">🔧 Ver Servicios</a></li>
      <li><a href="/ventas"> Ver Ventas</a></li>
      <li><a href="/"> Página Principal</a></li>
    </ul>
  `);
});

module.exports = router;