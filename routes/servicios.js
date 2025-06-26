const express = require("express");
const router = express.Router();

// Lista de servicios técnicos
router.get("/", (req, res) => {
  res.send(`
      <h1>�� Servicios Técnicos Amek th</h1>
      <h2>Soporte y reparación profesional</h2>
      
      <h3>💻 Reparación de Computadoras</h3>
      <ul>
        <li>Cambio de disco duro por SSD</li>
        <li>Limpieza y mantenimiento</li>
        <li>Reparación de hardware</li>
        <li>Instalación de software</li>
      </ul>
      
      <h3>📱 Reparación de Notebooks</h3>
      <ul>
        <li>Cambio de teclado</li>
        <li>Reparación de pantalla</li>
        <li>Cambio de batería</li>
        <li>Optimización de rendimiento</li>
      </ul>
      
      <h3>��️ Soporte Técnico</h3>
      <ul>
        <li>Asesoramiento técnico</li>
        <li>Configuración de equipos</li>
        <li>Recuperación de datos</li>
        <li>Instalación de programas</li>
      </ul>
      
      <h3>🔗 Navegación:</h3>
      <ul>
        <li><a href="/amek"> Volver a Amek th</a></li>
        <li><a href="/productos">📦 Ver Productos</a></li>
        <li><a href="/ventas"> Ver Ventas</a></li>
        <li><a href="/clientes"> Ver Clientes</a></li>
        <li><a href="/"> Página Principal</a></li>
      </ul>
    `);
});

module.exports = router;
