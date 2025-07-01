const { Sequelize } = require('sequelize');
const path = require('path');

// Configuración de la base de datos SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database/amek_th.db'),
  logging: false, // Desactivar logs SQL para producción
});

// Función para conectar a la base de datos
const conectarDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');
    
    // Importar modelos para que Sequelize los reconozca
    require('../models');
    
    // Sincronizar modelos con la base de datos
    await sequelize.sync({ force: true }); // force: true recrea las tablas
    console.log('✅ Modelos sincronizados con la base de datos.');
    
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
};

module.exports = {
  sequelize,
  conectarDB
}; 