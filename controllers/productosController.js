const Productos = require('../models/Producto');

// 1. Función para mostrar todos los productos
exports.mostrarTodos = async (req, res) => {
  try{
  const productos = await Productos.findAll();
  res.json(productos)
}catch(error){
  res.status(500).json({ error: 'Error' });
}
};
// 2. Función para mostrar un producto por ID
exports.mostrarUno = async (req, res) => {
  try{
  const unProducto = await Productos.findByPk(req.params.id);
  res.json(unProducto);
  }catch(error){
    res.status(500).json({ error: 'Error' });
  }
};

// 3. Función para crear un nuevo producto
exports.crear = async (req, res) => {
  try{
  const crearProducto = await Productos.create(req.body);
  res.json(crearProducto)
  }catch(error){
  res.status(500).json({ error: 'Error' });
  }
};