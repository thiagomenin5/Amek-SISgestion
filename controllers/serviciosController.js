const clientesController = require('./clientesController');

const serviciosController = {
    servicios: [
        {
            id: 1,
            tipo: "Reparación",
            descripcion: "Cambio de disco duro por SSD de 500GB",
            clienteId: 1,
            estado: "En proceso",
            fechaIngreso: "2024-01-15",
            fechaEstimada: "2024-01-20",
            precio: 8000,
            notas: "Cliente solicita backup de datos"
        },
        {
            id: 2,
            tipo: "Instalación",
            descripcion: "Instalación de Windows 10",
            clienteId: 2,
            estado: "Finalizado",
            fechaIngreso: "2024-02-01",
            fechaEstimada: "2024-02-05",
            precio: 12000,
            notas: "Cliente solicita instalación de software"
        }
    ],

    // Mostrar todos los servicios
    mostrarTodos: (req, res) => {
        res.send(`
            <h1>🔧 Servicios Técnicos de Amek th</h1>
            <h2>Lista de Servicios:</h2>
            
            ${serviciosController.servicios.map(servicio => {
                const cliente = clientesController.clientes.find(cliente => cliente.id === servicio.clienteId);
                const nombreCliente = cliente ? `${cliente.nombre} ${cliente.apellido}` : 'Cliente no encontrado';
                
                return `
                <div style="border: 1px solid #ccc; margin: 10px; padding: 15px;">
                    <h3>${servicio.tipo}</h3>
                    <p><strong>Descripción:</strong> ${servicio.descripcion}</p>
                    <p><strong>Cliente:</strong> ${nombreCliente}</p>
                    <p><strong>Estado:</strong> <span style="color: ${servicio.estado === 'Finalizado' ? 'green' : servicio.estado === 'En proceso' ? 'orange' : 'red'}">${servicio.estado}</span></p>
                    <p><strong>Fecha de ingreso:</strong> ${servicio.fechaIngreso}</p>
                    <p><strong>Fecha estimada:</strong> ${servicio.fechaEstimada}</p>
                    <p><strong>Precio:</strong> $${servicio.precio}</p>
                    <p><strong>Notas:</strong> ${servicio.notas}</p>
                    <a href="/servicios/${servicio.id}">Ver detalles</a>
                    <a href="/servicios/${servicio.id}/editar" style="margin-left: 10px;">Editar</a>
                </div>
                `;
            }).join("")}
            
            <br>
            <a href="/servicios/crear">➕ Agregar nuevo servicio</a>
        `);
    },

    // Mostrar un servicio específico
    mostrarUno: (req, res) => {
        const id = parseInt(req.params.id);
        const servicio = serviciosController.servicios.find(servicio => servicio.id === id);
        
        if (servicio) {
            const cliente = clientesController.clientes.find(cliente => cliente.id === servicio.clienteId);
            const nombreCliente = cliente ? `${cliente.nombre} ${cliente.apellido}` : 'Cliente no encontrado';
            
            res.send(`
                <h1>🔧 Detalles del Servicio</h1>
                <div style="border: 2px solid #007bff; margin: 10px; padding: 20px;">
                    <h2>${servicio.tipo}</h2>
                    <p><strong>ID:</strong> ${servicio.id}</p>
                    <p><strong>Descripción:</strong> ${servicio.descripcion}</p>
                    <p><strong>Cliente:</strong> ${nombreCliente}</p>
                    <p><strong>Estado:</strong> <span style="color: ${servicio.estado === 'Finalizado' ? 'green' : servicio.estado === 'En proceso' ? 'orange' : 'red'}">${servicio.estado}</span></p>
                    <p><strong>Fecha de ingreso:</strong> ${servicio.fechaIngreso}</p>
                    <p><strong>Fecha estimada de entrega:</strong> ${servicio.fechaEstimada}</p>
                    <p><strong>Precio:</strong> $${servicio.precio}</p>
                    <p><strong>Notas:</strong> ${servicio.notas}</p>
                </div>
                <div style="margin: 10px;">
                    <a href="/servicios/${servicio.id}/editar">✏️ Editar servicio</a>
                    <a href="/servicios/${servicio.id}/cambiar-estado" style="margin-left: 10px;">🔄 Cambiar estado</a>
                    <a href="/servicios" style="margin-left: 10px;">← Volver a la lista</a>
                </div>
            `);
        } else {
            res.send(`
                <h1>❌ Servicio no encontrado</h1>
                <p>El servicio con ID ${id} no existe.</p>
                <a href="/servicios">← Volver a la lista</a>
            `);
        }
    },

    // Mostrar formulario para crear servicio
    crear: (req, res) => {
        const clientes = clientesController.clientes;
        
        res.send(`
            <h1>➕ Agregar Nuevo Servicio Técnico</h1>
            <form action="/servicios" method="POST">
                <p><label>Tipo de servicio: 
                    <select name="tipo" required>
                        <option value="">Seleccionar tipo</option>
                        <option value="Reparación">Reparación</option>
                        <option value="Instalación">Instalación</option>
                        <option value="Mantenimiento">Mantenimiento</option>
                        <option value="Actualización">Actualización</option>
                        <option value="Diagnóstico">Diagnóstico</option>
                    </select>
                </label></p>
                
                <p><label>Cliente: 
                    <select name="clienteId" required>
                        <option value="">Seleccionar cliente</option>
                        ${clientes.map(cliente => 
                            `<option value="${cliente.id}">${cliente.nombre} ${cliente.apellido}</option>`
                        ).join('')}
                    </select>
                </label></p>
                
                <p><label>Descripción: <textarea name="descripcion" required placeholder="Describe el trabajo a realizar"></textarea></label></p>
                
                <p><label>Estado: 
                    <select name="estado" required>
                        <option value="Pendiente">Pendiente</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Finalizado">Finalizado</option>
                        <option value="Cancelado">Cancelado</option>
                    </select>
                </label></p>
                
                <p><label>Fecha de ingreso: <input type="date" name="fechaIngreso" required></label></p>
                <p><label>Fecha estimada de entrega: <input type="date" name="fechaEstimada" required></label></p>
                <p><label>Precio: <input type="number" name="precio" required placeholder="0"></label></p>
                <p><label>Notas: <textarea name="notas" placeholder="Notas adicionales"></textarea></label></p>
                
                <button type="submit">Guardar Servicio</button>
            </form>
            <a href="/servicios">← Volver a la lista</a>
        `);
    },

    // Guardar nuevo servicio
    guardar: (req, res) => {
        const nuevoServicio = {
            id: serviciosController.servicios.length + 1,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            clienteId: parseInt(req.body.clienteId),
            estado: req.body.estado,
            fechaIngreso: req.body.fechaIngreso,
            fechaEstimada: req.body.fechaEstimada,
            precio: parseInt(req.body.precio),
            notas: req.body.notas || ''
        };

        serviciosController.servicios.push(nuevoServicio);

        res.send(`
            <h1>✅ Servicio guardado exitosamente</h1>
            <p>El servicio "${nuevoServicio.tipo}" ha sido agregado.</p>
            <a href="/servicios">Ver todos los servicios</a>
        `);
    },

    // Mostrar formulario para editar servicio
    editar: (req, res) => {
        const id = parseInt(req.params.id);
        const servicio = serviciosController.servicios.find(servicio => servicio.id === id);
        const clientes = clientesController.clientes;

        if (servicio) {
            res.send(`
                <h1>✏️ Editar Servicio</h1>
                <form action="/servicios/${servicio.id}/actualizar" method="POST">
                    <p><label>Tipo de servicio: 
                        <select name="tipo" required>
                            <option value="Reparación" ${servicio.tipo === 'Reparación' ? 'selected' : ''}>Reparación</option>
                            <option value="Instalación" ${servicio.tipo === 'Instalación' ? 'selected' : ''}>Instalación</option>
                            <option value="Mantenimiento" ${servicio.tipo === 'Mantenimiento' ? 'selected' : ''}>Mantenimiento</option>
                            <option value="Actualización" ${servicio.tipo === 'Actualización' ? 'selected' : ''}>Actualización</option>
                            <option value="Diagnóstico" ${servicio.tipo === 'Diagnóstico' ? 'selected' : ''}>Diagnóstico</option>
                        </select>
                    </label></p>
                    
                    <p><label>Cliente: 
                        <select name="clienteId" required>
                            ${clientes.map(cliente => 
                                `<option value="${cliente.id}" ${servicio.clienteId === cliente.id ? 'selected' : ''}>${cliente.nombre} ${cliente.apellido}</option>`
                            ).join('')}
                        </select>
                    </label></p>
                    
                    <p><label>Descripción: <textarea name="descripcion" required>${servicio.descripcion}</textarea></label></p>
                    
                    <p><label>Estado: 
                        <select name="estado" required>
                            <option value="Pendiente" ${servicio.estado === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                            <option value="En proceso" ${servicio.estado === 'En proceso' ? 'selected' : ''}>En proceso</option>
                            <option value="Finalizado" ${servicio.estado === 'Finalizado' ? 'selected' : ''}>Finalizado</option>
                            <option value="Cancelado" ${servicio.estado === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
                        </select>
                    </label></p>
                    
                    <p><label>Fecha de ingreso: <input type="date" name="fechaIngreso" value="${servicio.fechaIngreso}" required></label></p>
                    <p><label>Fecha estimada de entrega: <input type="date" name="fechaEstimada" value="${servicio.fechaEstimada}" required></label></p>
                    <p><label>Precio: <input type="number" name="precio" value="${servicio.precio}" required></label></p>
                    <p><label>Notas: <textarea name="notas">${servicio.notas}</textarea></label></p>
                    
                    <button type="submit">Actualizar Servicio</button>
                </form>
                <a href="/servicios/${servicio.id}">← Volver al servicio</a>
            `);
        } else {
            res.send("Servicio no encontrado");
        }
    },

    // Actualizar servicio
    actualizar: (req, res) => {
        const id = parseInt(req.params.id);
        const servicioIndex = serviciosController.servicios.findIndex(servicio => servicio.id === id);

        if (servicioIndex !== -1) {
            serviciosController.servicios[servicioIndex] = {
                ...serviciosController.servicios[servicioIndex],
                tipo: req.body.tipo,
                descripcion: req.body.descripcion,
                clienteId: parseInt(req.body.clienteId),
                estado: req.body.estado,
                fechaIngreso: req.body.fechaIngreso,
                fechaEstimada: req.body.fechaEstimada,
                precio: parseInt(req.body.precio),
                notas: req.body.notas || ''
            };

            res.send(`
                <h1>✅ Servicio actualizado exitosamente</h1>
                <p>El servicio ha sido modificado correctamente.</p>
                <a href="/servicios/${id}">Ver servicio actualizado</a>
            `);
        } else {
            res.send("Servicio no encontrado");
        }
    },

    // Cambiar estado del servicio
    cambiarEstado: (req, res) => {
        const id = parseInt(req.params.id);
        const servicio = serviciosController.servicios.find(servicio => servicio.id === id);

        if (servicio) {
            res.send(`
                <h1>🔄 Cambiar Estado del Servicio</h1>
                <p><strong>Servicio:</strong> ${servicio.tipo}</p>
                <p><strong>Estado actual:</strong> ${servicio.estado}</p>
                
                <form action="/servicios/${servicio.id}/actualizar-estado" method="POST">
                    <p><label>Nuevo estado: 
                        <select name="estado" required>
                            <option value="Pendiente" ${servicio.estado === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                            <option value="En proceso" ${servicio.estado === 'En proceso' ? 'selected' : ''}>En proceso</option>
                            <option value="Finalizado" ${servicio.estado === 'Finalizado' ? 'selected' : ''}>Finalizado</option>
                            <option value="Cancelado" ${servicio.estado === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
                        </select>
                    </label></p>
                    
                    <button type="submit">Actualizar Estado</button>
                </form>
                <a href="/servicios/${servicio.id}">← Volver al servicio</a>
            `);
        } else {
            res.send("Servicio no encontrado");
        }
    },

    // Actualizar solo el estado
    actualizarEstado: (req, res) => {
        const id = parseInt(req.params.id);
        const servicioIndex = serviciosController.servicios.findIndex(servicio => servicio.id === id);

        if (servicioIndex !== -1) {
            serviciosController.servicios[servicioIndex].estado = req.body.estado;

            res.send(`
                <h1>✅ Estado actualizado</h1>
                <p>El estado del servicio ha sido cambiado a: <strong>${req.body.estado}</strong></p>
                <a href="/servicios/${id}">Ver servicio</a>
            `);
        } else {
            res.send("Servicio no encontrado");
        }
    },

    // Eliminar servicio
    eliminar: (req, res) => {
        const id = parseInt(req.params.id);
        const servicioIndex = serviciosController.servicios.findIndex(servicio => servicio.id === id);

        if (servicioIndex !== -1) {
            const servicioEliminado = serviciosController.servicios.splice(servicioIndex, 1)[0];
            res.send(`
                <h1>✅ Servicio eliminado</h1>
                <p>El servicio "${servicioEliminado.tipo}" ha sido eliminado.</p>
                <a href="/servicios">Ver todos los servicios</a>
            `);
        } else {
            res.send("Servicio no encontrado");
        }
    }
};

module.exports = serviciosController;