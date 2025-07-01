const productosController = {
  // Datos de ejemplo (después los moveremos a una base de datos)
  productos: [
    {
      id: 1,
      nombre: "Parlante Bluetooth JBL Flip 5",
      categoria: "Parlantes",
      precio: 15000,
      stock: 8,
      descripcion: "Parlante portátil con 20W de potencia, resistente al agua",
      marca: "JBL",
      codigo: "PARL-001",
    },
    {
      id: 2,
      nombre: "Auriculares Sony WH-1000XM4",
      categoria: "Auriculares",
      precio: 45000,
      stock: 3,
      descripcion: "Auriculares inalámbricos con cancelación de ruido",
      marca: "Sony",
      codigo: "AUR-001",
    },
    {
      id: 3,
      nombre: "Teclado Mecánico Logitech G Pro",
      categoria: "Teclados",
      precio: 12000,
      stock: 5,
      descripcion: "Teclado gaming con switches mecánicos",
      marca: "Logitech",
      codigo: "TEC-001",
    },
  ],

  // Mostrar todos los productos
  mostrarTodos: (req, res) => {
    res.send(`
            <h1>📦 Productos de Amek th</h1>
            <h2>Lista de productos disponibles:</h2>
            
            ${productosController.productos
              .map(
                (producto) => `
                <div style="border: 1px solid #ccc; margin: 10px; padding: 15px;">
                    <h3>${producto.nombre}</h3>
                    <p><strong>Categoría:</strong> ${producto.categoria}</p>
                    <p><strong>Precio:</strong> $${producto.precio}</p>
                    <p><strong>Stock:</strong> ${producto.stock} unidades</p>
                    <p><strong>Marca:</strong> ${producto.marca}</p>
                    <p><strong>Código:</strong> ${producto.codigo}</p>
                    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
                    <a href="/productos/${producto.id}">Ver detalles</a>
                </div>
            `
              )
              .join("")}
            
            <br>
            <a href="/productos/crear">➕ Agregar nuevo producto</a>
        `);
  },

  // Mostrar un producto específico
  mostrarUno: (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productosController.productos.find((p) => p.id === id);

    if (producto) {
      res.send(`
                <h1>📦 Detalles del Producto</h1>
                <div style="border: 2px solid #007bff; margin: 10px; padding: 20px;">
                    <h2>${producto.nombre}</h2>
                    <p><strong>ID:</strong> ${producto.id}</p>
                    <p><strong>Categoría:</strong> ${producto.categoria}</p>
                    <p><strong>Precio:</strong> $${producto.precio}</p>
                    <p><strong>Stock:</strong> ${producto.stock} unidades</p>
                    <p><strong>Marca:</strong> ${producto.marca}</p>
                    <p><strong>Código:</strong> ${producto.codigo}</p>
                    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
                </div>
                <a href="/productos">← Volver a la lista</a>
            `);
    } else {
      res.send("Producto no encontrado");
    }
  },

  // Mostrar formulario para crear producto
  crear: (req, res) => {
    res.send(`
            <h1>➕ Agregar Nuevo Producto</h1>
            <form action="/productos" method="POST">
                <p><label>Nombre: <input type="text" name="nombre" required></label></p>
                <p><label>Categoría: 
                    <select name="categoria" required>
                        <option value="Parlantes">Parlantes</option>
                        <option value="Auriculares">Auriculares</option>
                        <option value="Teclados">Teclados</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Discos">Discos sólidos</option>
                    </select>
                </label></p>
                <p><label>Precio: <input type="number" name="precio" required></label></p>
                <p><label>Stock: <input type="number" name="stock" required></label></p>
                <p><label>Marca: <input type="text" name="marca" required></label></p>
                <p><label>Código: <input type="text" name="codigo" required></label></p>
                <p><label>Descripción: <textarea name="descripcion" required></textarea></label></p>
                <button type="submit">Guardar Producto</button>
            </form>
            <a href="/productos">← Volver a la lista</a>
        `);
  },

  // Guardar nuevo producto
  guardar: (req, res) => {
    const nuevoProducto = {
      id: productosController.productos.length + 1,
      nombre: req.body.nombre,
      categoria: req.body.categoria,
      precio: parseInt(req.body.precio),
      stock: parseInt(req.body.stock),
      marca: req.body.marca,
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
    };
    console.log("�� Producto a agregar:", nuevoProducto);
    console.log("�� Productos antes:", productosController.productos.length);

    productosController.productos.push(nuevoProducto);

    console.log("📊 Productos después:", productosController.productos.length);
    console.log("📋 Lista completa:", productosController.productos);
    res.send(`
            <h1>✅ Producto guardado exitosamente</h1>
            <p>El producto "${nuevoProducto.nombre}" ha sido agregado.</p>
            <a href="/productos">Ver todos los productos</a>
        `);
  },
};

module.exports = productosController;
