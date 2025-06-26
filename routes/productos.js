const express = require('express');
const router = express.Router();

// Lista de productos
router.get('/', (req, res) => {
  res.send(`
    <h1>📦 Productos de Amek th</h1>
    <h2>Catálogo de productos tecnológicos</h2>
    
    <h3> Parlantes</h3>
    <ul>
      <li>Parlante Bluetooth JBL</li>
      <li>Parlante Gaming RGB</li>
      <li>Parlante Portátil</li>
    </ul>
    
    <h3>🎧 Auriculares</h3>
    <ul>
      <li>Auriculares Gaming</li>
      <li>Auriculares Bluetooth</li>
      <li>Auriculares con Micrófono</li>
    </ul>
    
    <h3>⌨️ Teclados</h3>
    <ul>
      <li>Teclado Mecánico</li>
      <li>Teclado Gaming</li>
      <li>Teclado Inalámbrico</li>
    </ul>
    
    <h3>🔗 Navegación:</h3>
    <ul>
      <li><a href="/amek"> Volver a Amek th</a></li>
      <li><a href="/servicios">🔧 Ver Servicios</a></li>
      <li><a href="/ventas"> Ver Ventas</a></li>
      <li><a href="/clientes"> Ver Clientes</a></li>
      <li><a href="/"> Página Principal</a></li>
    </ul>
  `);
});

module.exports = router;