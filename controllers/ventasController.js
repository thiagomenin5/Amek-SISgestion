const productosController = require('./productosController');
const clientesController = require('./clientesController');

const ventasController = {
    ventas: [
        {
            id: 1,
            clienteId: 1,
            productos: [
                {
                    productoId: 1,
                    cantidad: 2,
                    precioUnitario: 15000,
                    subtotal: 30000
                }
            ],
            servicios: [
                {
                    servicioId: 1,
                    precio: 8000
                }
            ],
            fecha: "2024-01-15",
            total: 38000,
            estado: "Pagado",
            metodoPago: "Efectivo",
            notas: "Cliente solicitó factura"
        },
        {
            id: 2,
            clienteId: 2,
            productos: [
                {
                    productoId: 2,
                    cantidad: 1,
                    precioUnitario: 45000,
                    subtotal: 45000
                },
                {
                    productoId: 3,
                    cantidad: 1,
                    precioUnitario: 12000,
                    subtotal: 12000
                }
            ],
            servicios: [],
            fecha: "2024-01-20",
            total: 57000,
            estado: "Pendiente",
            metodoPago: "Tarjeta",
            notas: ""
        }
    ],

    // Mostrar todas las ventas
    mostrarTodas: (req, res) => {
        res.send(`
            <h1>💰 Ventas de Amek th</h1>
            <h2>Lista de Ventas:</h2>
            
            ${ventasController.ventas.map(venta => {
                const cliente = clientesController.clientes.find(cliente => cliente.id === venta.clienteId);
                const nombreCliente = cliente ? `${cliente.nombre} ${cliente.apellido}` : 'Cliente no encontrado';
                
                const productosInfo = venta.productos.map(item => {
                    const producto = productosController.productos.find(p => p.id === item.productoId);
                    return producto ? `${producto.nombre} (x${item.cantidad})` : 'Producto no encontrado';
                }).join(', ');
                
                return `
                <div style="border: 1px solid #ccc; margin: 10px; padding: 15px;">
                    <h3>Venta #${venta.id}</h3>
                    <p><strong>Cliente:</strong> ${nombreCliente}</p>
                    <p><strong>Fecha:</strong> ${venta.fecha}</p>
                    <p><strong>Productos:</strong> ${productosInfo || 'Sin productos'}</p>
                    <p><strong>Total:</strong> $${venta.total}</p>
                    <p><strong>Estado:</strong> <span style="color: ${venta.estado === 'Pagado' ? 'green' : venta.estado === 'Pendiente' ? 'orange' : 'red'}">${venta.estado}</span></p>
                    <p><strong>Método de pago:</strong> ${venta.metodoPago}</p>
                    <a href="/ventas/${venta.id}">Ver detalles</a>
                    <a href="/ventas/${venta.id}/editar" style="margin-left: 10px;">Editar</a>
                </div>
                `;
            }).join("")}
            
            <br>
            <a href="/ventas/crear">➕ Crear nueva venta</a>
        `);
    },

    // Mostrar una venta específica
    mostrarUna: (req, res) => {
        const id = parseInt(req.params.id);
        const venta = ventasController.ventas.find(venta => venta.id === id);
        
        if (venta) {
            const cliente = clientesController.clientes.find(cliente => cliente.id === venta.clienteId);
            const nombreCliente = cliente ? `${cliente.nombre} ${cliente.apellido}` : 'Cliente no encontrado';
            
            const productosInfo = venta.productos.map(item => {
                const producto = productosController.productos.find(p => p.id === item.productoId);
                return producto ? {
                    nombre: producto.nombre,
                    cantidad: item.cantidad,
                    precioUnitario: item.precioUnitario,
                    subtotal: item.subtotal
                } : null;
            }).filter(Boolean);
            
            res.send(`
                <h1>💰 Detalles de la Venta #${venta.id}</h1>
                <div style="border: 2px solid #007bff; margin: 10px; padding: 20px;">
                    <h2>Información General</h2>
                    <p><strong>Cliente:</strong> ${nombreCliente}</p>
                    <p><strong>Fecha:</strong> ${venta.fecha}</p>
                    <p><strong>Estado:</strong> <span style="color: ${venta.estado === 'Pagado' ? 'green' : venta.estado === 'Pendiente' ? 'orange' : 'red'}">${venta.estado}</span></p>
                    <p><strong>Método de pago:</strong> ${venta.metodoPago}</p>
                    
                    <h3>Productos:</h3>
                    ${productosInfo.length > 0 ? `
                        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                            <tr style="background-color: #f0f0f0;">
                                <th style="border: 1px solid #ddd; padding: 8px;">Producto</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Cantidad</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Precio Unit.</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Subtotal</th>
                            </tr>
                            ${productosInfo.map(item => `
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px;">${item.nombre}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">${item.cantidad}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">$${item.precioUnitario}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">$${item.subtotal}</td>
                                </tr>
                            `).join('')}
                        </table>
                    ` : '<p>No hay productos en esta venta</p>'}
                    
                    <h3>Total: $${venta.total}</h3>
                    ${venta.notas ? `<p><strong>Notas:</strong> ${venta.notas}</p>` : ''}
                </div>
                <div style="margin: 10px;">
                    <a href="/ventas/${venta.id}/editar">✏️ Editar venta</a>
                    <a href="/ventas/${venta.id}/generar-factura" style="margin-left: 10px;">📄 Generar factura</a>
                    <a href="/ventas" style="margin-left: 10px;">← Volver a la lista</a>
                </div>
            `);
        } else {
            res.send(`
                <h1>❌ Venta no encontrada</h1>
                <p>La venta con ID ${id} no existe.</p>
                <a href="/ventas">← Volver a la lista</a>
            `);
        }
    },

    // Mostrar formulario para crear venta
    crear: (req, res) => {
        const clientes = clientesController.clientes;
        const productos = productosController.productos;
        
        res.send(`
            <h1>➕ Crear Nueva Venta</h1>
            <form action="/ventas" method="POST">
                <h3>Información del Cliente</h3>
                <p><label>Cliente: 
                    <select name="clienteId" required>
                        <option value="">Seleccionar cliente</option>
                        ${clientes.map(cliente => 
                            `<option value="${cliente.id}">${cliente.nombre} ${cliente.apellido}</option>`
                        ).join('')}
                    </select>
                </label></p>
                
                <h3>Productos</h3>
                <div id="productos-container">
                    <div class="producto-item">
                        <p><label>Producto: 
                            <select name="productos[0][productoId]" required>
                                <option value="">Seleccionar producto</option>
                                ${productos.map(producto => 
                                    `<option value="${producto.id}" data-precio="${producto.precio}">${producto.nombre} - $${producto.precio}</option>`
                                ).join('')}
                            </select>
                        </label></p>
                        <p><label>Cantidad: <input type="number" name="productos[0][cantidad]" min="1" value="1" required></label></p>
                    </div>
                </div>
                <button type="button" onclick="agregarProducto()">➕ Agregar otro producto</button>
                
                <h3>Información de Pago</h3>
                <p><label>Fecha: <input type="date" name="fecha" required></label></p>
                <p><label>Estado: 
                    <select name="estado" required>
                        <option value="Pendiente">Pendiente</option>
                        <option value="Pagado">Pagado</option>
                        <option value="Cancelado">Cancelado</option>
                    </select>
                </label></p>
                <p><label>Método de pago: 
                    <select name="metodoPago" required>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Tarjeta">Tarjeta</option>
                        <option value="Transferencia">Transferencia</option>
                        <option value="Mercado Pago">Mercado Pago</option>
                    </select>
                </label></p>
                <p><label>Notas: <textarea name="notas" placeholder="Notas adicionales"></textarea></label></p>
                
                <button type="submit">Guardar Venta</button>
            </form>
            <a href="/ventas">← Volver a la lista</a>
            
            <script>
                let productoCount = 1;
                
                function agregarProducto() {
                    const container = document.getElementById('productos-container');
                    const nuevoProducto = document.createElement('div');
                    nuevoProducto.className = 'producto-item';
                    nuevoProducto.innerHTML = \`
                        <p><label>Producto: 
                            <select name="productos[\${productoCount}][productoId]" required>
                                <option value="">Seleccionar producto</option>
                                ${productos.map(producto => 
                                    `<option value="${producto.id}" data-precio="${producto.precio}">${producto.nombre} - $${producto.precio}</option>`
                                ).join('')}
                            </select>
                        </label></p>
                        <p><label>Cantidad: <input type="number" name="productos[\${productoCount}][cantidad]" min="1" value="1" required></label></p>
                        <button type="button" onclick="this.parentElement.remove()">❌ Eliminar</button>
                    \`;
                    container.appendChild(nuevoProducto);
                    productoCount++;
                }
            </script>
        `);
    },

    // Guardar nueva venta
    guardar: (req, res) => {
        const productos = req.body.productos || [];
        let total = 0;
        
        // Procesar productos
        const productosProcesados = productos.map(item => {
            const producto = productosController.productos.find(p => p.id === parseInt(item.productoId));
            if (producto) {
                const cantidad = parseInt(item.cantidad);
                const precioUnitario = producto.precio;
                const subtotal = cantidad * precioUnitario;
                total += subtotal;
                
                return {
                    productoId: parseInt(item.productoId),
                    cantidad: cantidad,
                    precioUnitario: precioUnitario,
                    subtotal: subtotal
                };
            }
            return null;
        }).filter(Boolean);

        const nuevaVenta = {
            id: ventasController.ventas.length + 1,
            clienteId: parseInt(req.body.clienteId),
            productos: productosProcesados,
            servicios: [], // Por ahora vacío, se puede expandir después
            fecha: req.body.fecha,
            total: total,
            estado: req.body.estado,
            metodoPago: req.body.metodoPago,
            notas: req.body.notas || ''
        };

        ventasController.ventas.push(nuevaVenta);

        res.send(`
            <h1>✅ Venta guardada exitosamente</h1>
            <p>La venta #${nuevaVenta.id} ha sido creada.</p>
            <p><strong>Total:</strong> $${nuevaVenta.total}</p>
            <a href="/ventas/${nuevaVenta.id}">Ver detalles de la venta</a>
        `);
    },

    // Mostrar formulario para editar venta
    editar: (req, res) => {
        const id = parseInt(req.params.id);
        const venta = ventasController.ventas.find(venta => venta.id === id);
        const clientes = clientesController.clientes;
        const productos = productosController.productos;

        if (venta) {
            res.send(`
                <h1>✏️ Editar Venta #${venta.id}</h1>
                <form action="/ventas/${venta.id}/actualizar" method="POST">
                    <h3>Información del Cliente</h3>
                    <p><label>Cliente: 
                        <select name="clienteId" required>
                            ${clientes.map(cliente => 
                                `<option value="${cliente.id}" ${venta.clienteId === cliente.id ? 'selected' : ''}>${cliente.nombre} ${cliente.apellido}</option>`
                            ).join('')}
                        </select>
                    </label></p>
                    
                    <h3>Estado y Pago</h3>
                    <p><label>Fecha: <input type="date" name="fecha" value="${venta.fecha}" required></label></p>
                    <p><label>Estado: 
                        <select name="estado" required>
                            <option value="Pendiente" ${venta.estado === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                            <option value="Pagado" ${venta.estado === 'Pagado' ? 'selected' : ''}>Pagado</option>
                            <option value="Cancelado" ${venta.estado === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
                        </select>
                    </label></p>
                    <p><label>Método de pago: 
                        <select name="metodoPago" required>
                            <option value="Efectivo" ${venta.metodoPago === 'Efectivo' ? 'selected' : ''}>Efectivo</option>
                            <option value="Tarjeta" ${venta.metodoPago === 'Tarjeta' ? 'selected' : ''}>Tarjeta</option>
                            <option value="Transferencia" ${venta.metodoPago === 'Transferencia' ? 'selected' : ''}>Transferencia</option>
                            <option value="Mercado Pago" ${venta.metodoPago === 'Mercado Pago' ? 'selected' : ''}>Mercado Pago</option>
                        </select>
                    </label></p>
                    <p><label>Notas: <textarea name="notas">${venta.notas}</textarea></label></p>
                    
                    <button type="submit">Actualizar Venta</button>
                </form>
                <a href="/ventas/${venta.id}">← Volver a la venta</a>
            `);
        } else {
            res.send("Venta no encontrada");
        }
    },

    // Actualizar venta
    actualizar: (req, res) => {
        const id = parseInt(req.params.id);
        const ventaIndex = ventasController.ventas.findIndex(venta => venta.id === id);

        if (ventaIndex !== -1) {
            ventasController.ventas[ventaIndex] = {
                ...ventasController.ventas[ventaIndex],
                clienteId: parseInt(req.body.clienteId),
                fecha: req.body.fecha,
                estado: req.body.estado,
                metodoPago: req.body.metodoPago,
                notas: req.body.notas || ''
            };

            res.send(`
                <h1>✅ Venta actualizada exitosamente</h1>
                <p>La venta #${id} ha sido modificada.</p>
                <a href="/ventas/${id}">Ver venta actualizada</a>
            `);
        } else {
            res.send("Venta no encontrada");
        }
    },

    // Generar factura (simulado)
    generarFactura: (req, res) => {
        const id = parseInt(req.params.id);
        const venta = ventasController.ventas.find(venta => venta.id === id);
        
        if (venta) {
            const cliente = clientesController.clientes.find(cliente => cliente.id === venta.clienteId);
            const nombreCliente = cliente ? `${cliente.nombre} ${cliente.apellido}` : 'Cliente no encontrado';
            
            res.send(`
                <h1>📄 Factura - Venta #${venta.id}</h1>
                <div style="border: 2px solid #000; padding: 20px; max-width: 600px;">
                    <h2>Amek th - Tecnología y Soporte Técnico</h2>
                    <hr>
                    <p><strong>Factura N°:</strong> ${venta.id}</p>
                    <p><strong>Fecha:</strong> ${venta.fecha}</p>
                    <p><strong>Cliente:</strong> ${nombreCliente}</p>
                    <hr>
                    
                    <h3>Productos:</h3>
                    ${venta.productos.map(item => {
                        const producto = productosController.productos.find(p => p.id === item.productoId);
                        return producto ? `
                            <p>${producto.nombre} - Cantidad: ${item.cantidad} - Precio: $${item.precioUnitario} - Subtotal: $${item.subtotal}</p>
                        ` : '';
                    }).join('')}
                    
                    <hr>
                    <h3>Total: $${venta.total}</h3>
                    <p><strong>Método de pago:</strong> ${venta.metodoPago}</p>
                    <p><strong>Estado:</strong> ${venta.estado}</p>
                    ${venta.notas ? `<p><strong>Notas:</strong> ${venta.notas}</p>` : ''}
                </div>
                <a href="/ventas/${venta.id}">← Volver a la venta</a>
            `);
        } else {
            res.send("Venta no encontrada");
        }
    },

    // Eliminar venta
    eliminar: (req, res) => {
        const id = parseInt(req.params.id);
        const ventaIndex = ventasController.ventas.findIndex(venta => venta.id === id);

        if (ventaIndex !== -1) {
            const ventaEliminada = ventasController.ventas.splice(ventaIndex, 1)[0];
            res.send(`
                <h1>✅ Venta eliminada</h1>
                <p>La venta #${ventaEliminada.id} ha sido eliminada.</p>
                <a href="/ventas">Ver todas las ventas</a>
            `);
        } else {
            res.send("Venta no encontrada");
        }
    }
};

module.exports = ventasController; 