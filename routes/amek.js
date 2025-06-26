const express = require('express');
const router = express.Router();

// Ruta principal de Amek th
router.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenidos a Amek th</h1>
    <h2>Tu tienda de tecnología y soporte técnico</h2>
    
    <h3>Productos que vendemos:</h3>
    <ul>
      <li>🔊 Parlantes</li>
      <li>🎧 Auriculares</li>
      <li>⌨️ Teclados</li>
      <li>🖱️ Mouse</li>
      <li> Discos sólidos</li>
    </ul>
    
    <h3>Servicios técnicos:</h3>
    <ul>
      <li>Reparación de computadoras</li>
      <li>Mejora de notebooks</li>
      <li>Soporte técnico</li>
    </ul>
    
    <h3>🔗 Navegación:</h3>
    <ul>
      <li><a href="/productos">📦 Ver Productos</a></li>
      <li><a href="/servicios">🔧 Ver Servicios</a></li>
      <li><a href="/ventas"> Ver Ventas</a></li>
      <li><a href="/clientes"> Ver Clientes</a></li>
      <li><a href="/"> Página Principal</a></li>
    </ul>
  `);
});

module.exports = router;