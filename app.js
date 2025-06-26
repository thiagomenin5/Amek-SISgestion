const express = require('express');
const app = express();
const port = 3000;


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




app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
