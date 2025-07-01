const { conectarDB } = require('../config/database');
const { Producto, Cliente, Servicio, Venta } = require('../models');

// Datos de ejemplo para productos
const productosEjemplo = [
  {
    nombre: 'Parlante Bluetooth JBL Flip 5',
    marca: 'JBL',
    categoria: 'parlantes',
    precio: 89.99,
    stock: 15,
    descripcion: 'Parlante portátil con sonido potente y resistencia al agua IPX7'
  },
  {
    nombre: 'Auriculares Sony WH-1000XM4',
    marca: 'Sony',
    categoria: 'auriculares',
    precio: 349.99,
    stock: 8,
    descripcion: 'Auriculares inalámbricos con cancelación de ruido líder en el mercado'
  },
  {
    nombre: 'Teclado Mecánico Logitech G Pro X',
    marca: 'Logitech',
    categoria: 'teclados',
    precio: 149.99,
    stock: 12,
    descripcion: 'Teclado gaming mecánico con switches intercambiables'
  },
  {
    nombre: 'Mouse Gaming Razer DeathAdder V3',
    marca: 'Razer',
    categoria: 'mouse',
    precio: 79.99,
    stock: 20,
    descripcion: 'Mouse ergonómico con sensor óptico de 30,000 DPI'
  },
  {
    nombre: 'SSD Samsung 970 EVO Plus 1TB',
    marca: 'Samsung',
    categoria: 'discos_solidos',
    precio: 129.99,
    stock: 25,
    descripcion: 'Disco sólido NVMe con velocidades de lectura de hasta 3,500 MB/s'
  },
  {
    nombre: 'Parlante Bluetooth Anker Soundcore',
    marca: 'Anker',
    categoria: 'parlantes',
    precio: 59.99,
    stock: 18,
    descripcion: 'Parlante compacto con 24 horas de reproducción'
  }
];

// Datos de ejemplo para clientes
const clientesEjemplo = [
  {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan.perez@email.com',
    telefono: '11-1234-5678',
    direccion: 'Av. Corrientes 1234, CABA',
    tipoCliente: 'regular',
    notas: 'Cliente frecuente, prefiere productos gaming'
  },
  {
    nombre: 'María',
    apellido: 'González',
    email: 'maria.gonzalez@email.com',
    telefono: '11-9876-5432',
    direccion: 'Belgrano 567, CABA',
    tipoCliente: 'premium',
    notas: 'Cliente premium, interesada en audio de alta calidad'
  },
  {
    nombre: 'Carlos',
    apellido: 'Rodríguez',
    email: 'carlos.rodriguez@empresa.com',
    telefono: '11-5555-1234',
    direccion: 'Palermo 890, CABA',
    tipoCliente: 'empresa',
    notas: 'Empresa de desarrollo, necesita equipos para oficina'
  },
  {
    nombre: 'Ana',
    apellido: 'López',
    email: 'ana.lopez@email.com',
    telefono: '11-4444-5678',
    direccion: 'Recoleta 321, CABA',
    tipoCliente: 'regular',
    notas: 'Estudiante, busca productos económicos'
  }
];

// Datos de ejemplo para servicios
const serviciosEjemplo = [
  {
    titulo: 'Reparación de Notebook Dell',
    descripcion: 'La notebook no enciende, posible problema de fuente o placa madre',
    tipoServicio: 'reparacion',
    estado: 'en_proceso',
    prioridad: 'alta',
    precio: 150.00,
    fechaInicio: new Date('2024-01-15'),
    fechaEstimada: new Date('2024-01-20'),
    diagnostico: 'Fuente de alimentación defectuosa',
    notasTecnicas: 'Modelo Dell Inspiron 15, 3 años de uso'
  },
  {
    titulo: 'Upgrade de RAM y SSD',
    descripcion: 'Actualización de memoria RAM a 16GB e instalación de SSD de 500GB',
    tipoServicio: 'upgrade',
    estado: 'finalizado',
    prioridad: 'media',
    precio: 200.00,
    fechaInicio: new Date('2024-01-10'),
    fechaFinalizacion: new Date('2024-01-12'),
    solucion: 'RAM Kingston 16GB DDR4 + SSD Samsung 500GB instalados correctamente',
    notasTecnicas: 'Notebook HP Pavilion, compatible con DDR4'
  },
  {
    titulo: 'Limpieza y Mantenimiento',
    descripcion: 'Limpieza completa de PC de escritorio, cambio de pasta térmica',
    tipoServicio: 'mantenimiento',
    estado: 'pendiente',
    prioridad: 'baja',
    precio: 80.00,
    fechaInicio: new Date('2024-01-18'),
    fechaEstimada: new Date('2024-01-19'),
    notasTecnicas: 'PC gaming, 2 años sin mantenimiento'
  }
];

// Función para poblar la base de datos
async function poblarBaseDeDatos() {
  try {
    console.log('🌱 Iniciando población de base de datos...');
    
    // Crear productos
    console.log('📦 Creando productos...');
    for (const producto of productosEjemplo) {
      await Producto.create(producto);
    }
    console.log(`✅ ${productosEjemplo.length} productos creados`);
    
    // Crear clientes
    console.log('👥 Creando clientes...');
    const clientesCreados = [];
    for (const cliente of clientesEjemplo) {
      const clienteCreado = await Cliente.create(cliente);
      clientesCreados.push(clienteCreado);
    }
    console.log(`✅ ${clientesEjemplo.length} clientes creados`);
    
    // Crear servicios (asociados a clientes)
    console.log('🔧 Creando servicios...');
    for (let i = 0; i < serviciosEjemplo.length; i++) {
      const servicio = serviciosEjemplo[i];
      const clienteId = clientesCreados[i % clientesCreados.length].id;
      
      await Servicio.create({
        ...servicio,
        clienteId: clienteId
      });
    }
    console.log(`✅ ${serviciosEjemplo.length} servicios creados`);
    
    console.log('🎉 Base de datos poblada exitosamente!');
    console.log('\n📊 Resumen:');
    console.log(`- Productos: ${productosEjemplo.length}`);
    console.log(`- Clientes: ${clientesEjemplo.length}`);
    console.log(`- Servicios: ${serviciosEjemplo.length}`);
    
  } catch (error) {
    console.error('❌ Error al poblar la base de datos:', error);
  } finally {
    process.exit(0);
  }
}

// Ejecutar el script
poblarBaseDeDatos(); 