const Producto = require('./Producto');
const Cliente = require('./Cliente');
const Servicio = require('./Servicio');
const Venta = require('./Venta');

// Definir relaciones entre modelos

// 1. Cliente puede tener muchos servicios
Cliente.hasMany(Servicio, {
  foreignKey: 'clienteId',
  as: 'servicios'
});
Servicio.belongsTo(Cliente, {
  foreignKey: 'clienteId',
  as: 'cliente'
});

// 2. Cliente puede tener muchas ventas
Cliente.hasMany(Venta, {
  foreignKey: 'clienteId',
  as: 'ventas'
});
Venta.belongsTo(Cliente, {
  foreignKey: 'clienteId',
  as: 'cliente'
});

// 3. Venta puede tener muchos productos (a través de una tabla intermedia)
// Esto se implementará cuando creemos el modelo DetalleVenta

module.exports = {
  Producto,
  Cliente,
  Servicio,
  Venta
}; 