const clientesController = {
  clientes: [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Perez",
      email: "juanperez@gmail.com",
      telefono: "1234567890",
      direccion: "Calle 123",
      fecha_ingreso: "2021-01-01",
      historial_compras: [],
    },
    {
      id: 2,
      nombre: "Martin",
      apellido: " Victoriano",
      email: "victoriano@gmail.com",
      telefono: "1144556677",
      direccion: "Maestro santana 345",
      fecha_ingreso: "2025-04-25",
      historial_compras: [],
    },
  ],
  mostrarClientes: (req, res) => {
    res.send(`
            <h1>📦 Clientes de Amek th</h1>
            <h2>Lista de Clientes:</h2>
            ${clientesController.clientes.map((cliente) => ` 
                <div style="border: 1px solid #ccc; margin: 10px; padding: 15px;">
                    <h3>${cliente.nombre} ${cliente.apellido}</h3>
                    <p><strong>Email:</strong> ${cliente.email}</p>
                    <p><strong>Telefono:</strong> ${cliente.telefono}</p>
                    <p><strong>Direccion:</strong> ${cliente.direccion} </p>
                    <p><strong>Historial de compras:</strong> ${cliente.historial_compras}</p>
                    <a href="/clientes/${cliente.id}">Ver detalles</a>
                </div>
                `
              )
              
              .join("")}
            <br>
            <a href="/clientes/crear">➕ Agregar nuevo cliente</a>
        `);
  },
  mostrarUno: (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientesController.clientes.find((c)=>c.id===id);
    if(cliente){
      res.send(`
       <h1>📦 Detalles del Cliente</h1>
       <div style="border: 2px solid #007bff; margin: 10px; padding: 20px;">
       <h2>${cliente.nombre} ${cliente.apellido}</h2>
       <p><strong>Email:</strong> ${cliente.email}</p>
       <p><strong>Telefono:</strong> ${cliente.telefono}</p>
       <p><strong>Direccion:</strong> ${cliente.direccion}</p>
       <p><strong>Fecha de ingreso:</strong> ${cliente.fecha_ingreso}</p>
       <p><strong>Historial de compras:</strong> ${cliente.historial_compras}</p>
       <a href="/clientes">← Volver a la lista</a>
       `)
       console.log(cliente);
    }else{
      res.send("Cliente no encontrado");
    }
  },
  crear: (req, res) => {
    res.send(`
      <h1>➕ Agregar nuevo cliente</h1>
      <form action="/clientes" method="POST">
        <p><label>Nombre: <input type="text" name="nombre" required></label></p>
        <p><label>Apellido: <input type="text" name="apellido" required></label></p>
        <p><label>Email: <input type="email" name="email" required></label></p>
        <p><label>Telefono: <input type="tel" name="telefono" required></label></p>
        <p><label>Direccion: <input type="text" name="direccion" required></label></p>
        <p><label>Fecha de ingreso: <input type="date" name="fecha_ingreso" required></label></p>
        <button type="submit">Guardar cliente</button>
      </form>
      <a href="/clientes">← Volver a la lista</a>
    `)
  },
  guardar: (req, res) => {
    const nuevoCliente = {
    id: clientesController.clientes.length + 1,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    fecha_ingreso: req.body.fecha_ingreso,
    historial_compras: [],
  };
  clientesController.clientes.push(nuevoCliente);
  res.send(`
    <h1>✅ Cliente ${nuevoCliente.nombre} ${nuevoCliente.apellido} agregado correctamente </h1>
    <a href="/clientes">← Volver a la lista</a>
  `);
  }

};

module.exports = clientesController;
