const express = require('express');
const app = express();
const port = 3000;

// Importar configuración de base de datos
const { conectarDB } = require('./config/database');

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const amekRoutes = require('./routes/amek');
const productosRoutes = require('./routes/productos');
const serviciosRoutes = require('./routes/servicios');
const clientesRoutes = require('./routes/clientes');
const ventasRoutes = require('./routes/ventas')

app.get('/', (req,res)=>{
    res.send("Bienvenidos a Amek th - Sistema de Gestion")
});  



app.use('/amek', amekRoutes);
app.use('/productos', productosRoutes);
app.use('/servicios', serviciosRoutes);
app.use('/clientes', clientesRoutes);
app.use('/ventas', ventasRoutes);




// Conectar a la base de datos y luego iniciar el servidor
conectarDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
    console.log(`📊 Base de datos conectada y sincronizada`);
  });
}).catch(error => {
  console.error('❌ Error al iniciar el servidor:', error);
});
