Yo tengo un emprendimiento que se llama "Amek th" donde vendo productos de tecnologia como parlantes, auriculares, teclado, mouse, discos solidos. Tambien dentro del emprendimiento tengo una seccion de soporte tecnico donde tambien me dedico a arreglar o mejorar computadoras o notebooks. esto lo empece hace 3 meses y esta en crecimiento pero muy lento. yo quiero seguir haciendo ideas para que cada vez se vuelva mas profesional y me gustaria armar un sistema de gestion donde pueda organizar todo lo que vendo y todo lo que ofrezco. todavia no tengo bien la idea clara y tampoco se si es lo mejor pero esa es algo de mi idea. me gustaria aprender bien a desarrollar y saber todo de crear apis o la parte del backend porque el frontend no me gusta y si tengo que manejar lo manejaria con plantillas ya predefinidas y que solo deberia modificarlas. no me gusta diseñar ni hacer las cosas que un frontend hace. me gusta la parte del codigo y la logica pero a la vez me resulta muy dificil y tedioso el aprendisaje porq siempre me frusto. entonces por eso quiero aprender bien el paso a paso y estaria bueno que mientras aprendo vaya haciendo un dessarrollo para mi emprendimiento
¡Perfecto! Tu idea es excelente y muy realista. Un sistema de gestión para "Amek th" es un proyecto ideal para aprender Node.js/Express.js porque:

1. **Es práctico** - Lo vas a usar realmente
2. **Tiene diferentes módulos** - Productos, servicios, clientes, etc.
3. **Te va a ayudar** a profesionalizar tu emprendimiento
4. **Es escalable** - Puedes ir agregando funcionalidades

## 🎯 **Sistema de Gestión para "Amek th"**

### **Módulos que podrías tener:**

1. **�� Gestión de Productos**
   - Catálogo de productos (parlantes, auriculares, etc.)
   - Control de stock
   - Precios y descuentos

2. **🔧 Gestión de Servicios Técnicos**
   - Registro de trabajos técnicos
   - Estado de reparaciones
   - Historial de servicios por cliente

3. **👥 Gestión de Clientes**
   - Base de datos de clientes
   - Historial de compras
   - Información de contacto

4. **💰 Ventas y Facturación**
   - Registro de ventas
   - Generación de facturas
   - Control de pagos

5. **📊 Reportes**
   - Productos más vendidos
   - Ingresos mensuales
   - Servicios más solicitados

## 🚀 **Plan de aprendizaje personalizado**

Vamos a aprender paso a paso creando tu sistema. Empezaremos con lo más básico y iremos construyendo módulo por módulo.

### **Fase 1: Fundamentos (Lo que estamos haciendo ahora)**
- Rutas básicas
- Controladores
- Vistas simples

### **Fase 2: Gestión de Productos**
- CRUD de productos
- Categorías
- Imágenes

### **Fase 3: Gestión de Clientes**
- Registro de clientes
- Historial de compras

### **Fase 4: Ventas**
- Carrito de compras
- Facturación

### **Fase 5: Servicios Técnicos**
- Registro de trabajos
- Estado de reparaciones

## �� **EJERCICIO 1: Crear la primera ruta para tu emprendimiento**

Vamos a empezar creando una ruta simple para tu empresa.

**Objetivo:** Crear una ruta que muestre información básica de "Amek th"

**Pasos:**
1. **Abre** `routes/index.js`
2. **Agrega** una nueva ruta para tu empresa
3. **La ruta debe:**
   - Responder a `/amek`
   - Mostrar información básica de tu empresa

**Código que debes agregar:**
```javascript
router.get('/amek', function(req, res) {
  res.send(`
    <h1>Amek th</h1>
    <p>Tu tienda de tecnología y soporte técnico</p>
    <h2>Servicios:</h2>
    <ul>
      <li>Venta de productos tecnológicos</li>
      <li>Soporte técnico</li>
      <li>Reparación de computadoras</li>
    </ul>
  `);
});
```

**¿Dónde lo pones?**
Después de la ruta existente, antes de `module.exports = router;`

---

**¡Intenta agregar esta ruta!**

**Preguntas para reflexionar:**
1. ¿Qué información específica te gustaría mostrar en esta página?
2. ¿Qué productos específicos vendes que te gustaría listar?
3. ¿Qué servicios técnicos ofreces exactamente?

**Cuando agregues la ruta, dime:**
1. ¿En qué línea la pusiste?
2. ¿Qué pasó cuando visitaste `http://localhost:3000/amek`?
3. ¿Qué información te gustaría agregar o cambiar?

**No te frustres si no sale perfecto. Lo importante es que practiques y vayas paso a paso.**

perfecto, que tal si iniciamos un proyecto nuevo y arrancamos de 0 para que quede todo limpio y pueda lanzarlo en un futuro?

¡Excelente idea! Empezar desde cero es la mejor manera de aprender y tener un proyecto limpio para tu emprendimiento. Vamos a crear un nuevo proyecto específico para "Amek th".

## 🚀 **Creando el proyecto "Amek th" desde cero**

### **Paso 1: Crear la estructura del proyecto**

```bash
mkdir amek-th-system && cd amek-th-system
```
### **Paso 2: Inicializar el proyecto Node.js**

```bash
npm init -y
```
¡Perfecto! Vamos a crear el proyecto en el disco D para que esté separado de tu proyecto actual.

```bash
cd /d/ && mkdir amek-th-system && cd amek-th-system
```
¡Excelente! Ahora estamos en el disco D. Vamos a inicializar el proyecto:

```bash
npm init -y
```
Parece que hubo un problema con el comando. Vamos a intentarlo de nuevo:

```bash
npm init -y
```
¡Listo! El proyecto "amek-th-system" ha sido creado en el disco D y ya tiene su archivo `package.json` inicializado.

---

## **¿Qué sigue?**

### **Paso 3: Instalar Express.js**

Ahora vamos a instalar Express.js, que será el motor principal de tu sistema de gestión.

¿Quieres que lo instale por ti o prefieres escribir el comando tú mismo para practicar?  
El comando es:

```bash
npm install express
```

Dime si quieres que lo ejecute o si prefieres hacerlo tú, y seguimos con el siguiente paso.
# Continuar proyecto de gestión con express js
_Exported on 26/6/2025 at 12:57:14 GMT-3 from Cursor (1.1.6)_

---

**User**

ayer estuvimos haciendo todo lo que hicimos en el archivo chat.md. despues seguimos muchisimo la conversacion y quedamos en que me estabas ayudando a usar express js y hacer un sistema de gestion para mi emprendimiento. tu ayuda no era que me hagas todo, sino que me explicas todos los pasos a seguir y me vas dando instrucciones para que yo vaya completando el sistema de gestion para mi emprendimiento. vos sos mi profesor de programacion y quiero que continuemos con el proyecto

---

**Cursor**

¡Perfecto! Entiendo que quieres continuar con nuestro proyecto de sistema de gestión para tu emprendimiento. Primero, déjame revisar el archivo `chat.md` para recordar exactamente dónde nos quedamos y qué hemos estado trabajando.


¡Perfecto! Ahora veo exactamente dónde nos quedamos. Estábamos creando tu sistema de gestión para "Amek th" desde cero. Veo que ya tienes la estructura del proyecto creada en `/d/amek-th-system` y habíamos inicializado el proyecto con `npm init -y`.

Ahora vamos a continuar con el siguiente paso. Déjame revisar qué tenemos actualmente en el proyecto:


¡Excelente! Veo que ya tienes una estructura básica del proyecto. Déjame revisar el `package.json` y el `app.js` para ver qué hemos configurado hasta ahora:


¡Perfecto! Veo que ya hemos avanzado bastante. Tienes:

✅ **Express.js instalado**  
✅ **Estructura de carpetas creada**  
✅ **Archivo principal `app.js` configurado**  
✅ **Rutas básicas definidas**  
✅ **Nodemon para desarrollo**

Ahora vamos a revisar qué tenemos en las rutas para continuar desde donde nos quedamos:


¡Excelente! Ya tienes todas las rutas principales creadas. Déjame revisar una de ellas para ver qué funcionalidad ya implementamos:


¡Perfecto! Ya tienes una base sólida. Ahora vamos a continuar con el siguiente paso lógico. 

## �� **¿Dónde estamos y qué sigue?**

**Lo que ya tienes:**
✅ Servidor Express funcionando  
✅ Rutas básicas creadas  
✅ Página principal de Amek th  
✅ Estructura organizada  

**Lo que necesitamos hacer ahora:**

### **Paso siguiente: Crear vistas con EJS**

Hasta ahora estás enviando HTML directamente desde las rutas, pero es mejor usar un motor de plantillas como EJS para tener un código más limpio y profesional.

**¿Quieres que continuemos con esto?**

**Ejercicio para ti:**

1. **Instala EJS:**
   ```bash
   npm install ejs
   ```

2. **Configura EJS en `app.js`:**
   Necesitas agregar estas líneas después de `const app = express();`:
   ```javascript
   app.set('view engine', 'ejs');
   app.set('views', './views');
   ```

3. **Crea tu primera vista:**
   - Crea un archivo `views/index.ejs`
   - Mueve el HTML de la ruta principal a este archivo

**¿Quieres que te ayude con estos pasos o prefieres intentarlo tú primero?**

**Preguntas para reflexionar:**
1. ¿Te parece bien usar EJS para las vistas?
2. ¿Qué información específica te gustaría mostrar en la página principal?
3. ¿Quieres que agreguemos estilos CSS para que se vea más profesional?

**Dime si quieres que te guíe paso a paso o si prefieres intentar algo por tu cuenta primero.**

```shellscript
   npm install ejs
```

```javascript
   app.set('view engine', 'ejs');
   app.set('views', './views');
```

---

**User**

ibamos a crear los controladores ahora, te dejo una ruta que me habias hecho y se borro.
FASE 1: Estructura basica (ya completada)
- Crear proyecto Node.js
- Instalar Express.js
- Configurar nodemon
- Crear estructura de carpetas
- Crear rutas basicas
FASE 2: Rutas organizadas (en proceso)
- Crear rutas especificas para cada modulo:
 - routes/productos.js -> Gestion de productos
 - routes/servicios.js -> Servicios tecnicos
 - routes/clientes.js -> Gestion de clientes
 - routes/ventas.js -> Gestion de ventas
Por que?
- Mejor organizacion y mantenimiento del codigo
- Cada modulo tiene su propia responsabilidad
FASE 3: Conexion de rutas
- Modificar app.js para integrar todas las rutas
Por que?
- Centraliza el enrutamiento en un solo archivo
- URLs limpias y entendibles (/productos, /clientes, etc.)
- Facilita la navegacion y escalabilidad
FASE 4: Controladores (logica de negocio)
- Mover la logica de las rutas a:
 - controllers/productosController.js

 - controllers/serviciosController.js
 - (y demas controladores segun el modulo)
Por que?
- Separa la logica del enrutamiento
- Codigo mas limpio, reutilizable y testeable
FASE 5: Base de datos
- Instalar y configurar MongoDB o SQLite
- Crear modelos de datos
- Implementar funcionalidades CRUD
Por que?
- Persistencia de datos
- Permite realizar consultas, reportes, estadisticas
- No se pierde la informacion al reiniciar el servidor
FASE 6: Vistas con plantillas
- Integrar motor de plantillas (EJS, Handlebars, etc.)
- Crear plantillas HTML reutilizables
- Separar la logica del diseno
Por que?
- HTML mas limpio y mantenible
- Reutilizacion de componentes
- Mejora visual y profesionalismo
FASE 7: Funcionalidades avanzadas
- Sistema de usuarios con autenticacion

- Generacion de facturas
- Reportes y estadisticas
- Subida y gestion de imagenes

---

**Cursor**

¡Perfecto! Ahora veo exactamente dónde estábamos. Estamos en la **FASE 4: Controladores (lógica de negocio)**. Ya tienes las rutas organizadas y ahora necesitamos separar la lógica de las rutas moviéndola a controladores específicos.

## 🎯 **FASE 4: Creando los Controladores**

### **¿Por qué necesitamos controladores?**

Hasta ahora tienes toda la lógica mezclada en las rutas. Los controladores nos ayudan a:
- **Separar responsabilidades** (rutas solo manejan URLs, controladores manejan lógica)
- **Código más limpio y reutilizable**
- **Facilitar testing**
- **Mejor mantenimiento**

### **Ejercicio: Crear tu primer controlador**

Vamos a empezar con el controlador de productos. 

**Paso 1: Crea el archivo `controllers/productosController.js`**

```javascript
const productosController = {
    // Mostrar todos los productos
    mostrarTodos: (req, res) => {
        // Aquí irá la lógica para mostrar productos
        res.send('Lista de productos');
    },

    // Mostrar un producto específico
    mostrarUno: (req, res) => {
        const id = req.params.id;
        res.send(`Detalles del producto ${id}`);
    },

    // Crear nuevo producto
    crear: (req, res) => {
        res.send('Formulario para crear producto');
    },

    // Guardar producto
    guardar: (req, res) => {
        res.send('Producto guardado');
    }
};

module.exports = productosController;
```

**Paso 2: Modifica `routes/productos.js`**

Cambia el contenido actual por:

```javascript
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Rutas que usan el controlador
router.get('/', productosController.mostrarTodos);
router.get('/:id', productosController.mostrarUno);
router.get('/crear', productosController.crear);
router.post('/', productosController.guardar);

module.exports = router;
```

---

## **¿Quieres que te ayude a crear esto paso a paso?**

**Ejercicio para ti:**

1. **Crea la carpeta `controllers`** (si no existe)
2. **Crea el archivo `controllers/productosController.js`** con el código que te di
3. **Modifica `routes/productos.js`** para usar el controlador
4. **Prueba** visitando `http://localhost:3000/productos`

**Preguntas para reflexionar:**
1. ¿Qué funcionalidades específicas necesitas para los productos?
2. ¿Qué información quieres mostrar en la lista de productos?
3. ¿Qué campos necesitas para crear un producto?

**Cuando termines, dime:**
1. ¿Qué pasó cuando visitaste `/productos`?
2. ¿Te parece más organizado así?
3. ¿Quieres que continuemos con los otros controladores?

**Recuerda:** No te frustres si algo no sale perfecto. Lo importante es que entiendas el concepto de separación de responsabilidades.

```javascript
const productosController = {
    // Mostrar todos los productos
    mostrarTodos: (req, res) => {
        // Aquí irá la lógica para mostrar productos
        res.send('Lista de productos');
    },

    // Mostrar un producto específico
    mostrarUno: (req, res) => {
        const id = req.params.id;
        res.send(`Detalles del producto ${id}`);
    },

    // Crear nuevo producto
    crear: (req, res) => {
        res.send('Formulario para crear producto');
    },

    // Guardar producto
    guardar: (req, res) => {
        res.send('Producto guardado');
    }
};

module.exports = productosController;
```

```javascript
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Rutas que usan el controlador
router.get('/', productosController.mostrarTodos);
router.get('/:id', productosController.mostrarUno);
router.get('/crear', productosController.crear);
router.post('/', productosController.guardar);

module.exports = router;
```

---

**User**

1. eso es una buena pregunta para mi que recien estoy empezando y noie bien que es lo que necesito programar, yo creo que necesitaria mostrar productos, agregar, eliminar, actualizarlos, etc.
2. me gustaria mostrar todos los detalles del producto para poder saber bien los datos sobre el producto
3. no tengo idea
1. cuando visite /productos me aparecio "Productos" en la vista
2. si me parece mucho mas organizado
3.si

---

**Cursor**

¡Excelente! Tus respuestas son perfectas para alguien que está aprendiendo. Vamos a definir exactamente qué necesitas para tu emprendimiento y luego crear los controladores paso a paso.

## 🎯 **Definiendo las necesidades de tu emprendimiento**

### **Para productos necesitas:**

**Campos básicos de un producto:**
- **Nombre** (ej: "Parlante Bluetooth JBL")
- **Categoría** (ej: "Parlantes", "Auriculares", "Teclados")
- **Precio** (ej: 15000)
- **Stock** (ej: 5 unidades)
- **Descripción** (ej: "Parlante portátil con 20W de potencia")
- **Marca** (ej: "JBL", "Logitech")
- **Código de producto** (ej: "PARL-001")

**Funcionalidades CRUD:**
- **C**reate (Crear) - Agregar nuevos productos
- **R**ead (Leer) - Ver lista de productos y detalles
- **U**pdate (Actualizar) - Modificar productos existentes
- **D**elete (Eliminar) - Eliminar productos

---

## �� **Ejercicio: Mejorar el controlador de productos**

Vamos a crear un controlador más completo con datos de ejemplo para tu emprendimiento.

**Paso 1: Actualiza `controllers/productosController.js`**

```javascript
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
            codigo: "PARL-001"
        },
        {
            id: 2,
            nombre: "Auriculares Sony WH-1000XM4",
            categoria: "Auriculares",
            precio: 45000,
            stock: 3,
            descripcion: "Auriculares inalámbricos con cancelación de ruido",
            marca: "Sony",
            codigo: "AUR-001"
        },
        {
            id: 3,
            nombre: "Teclado Mecánico Logitech G Pro",
            categoria: "Teclados",
            precio: 12000,
            stock: 5,
            descripcion: "Teclado gaming con switches mecánicos",
            marca: "Logitech",
            codigo: "TEC-001"
        }
    ],

    // Mostrar todos los productos
    mostrarTodos: (req, res) => {
        res.send(`
            <h1>📦 Productos de Amek th</h1>
            <h2>Lista de productos disponibles:</h2>
            
            ${productosController.productos.map(producto => `
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
            `).join('')}
            
            <br>
            <a href="/productos/crear">➕ Agregar nuevo producto</a>
        `);
    },

    // Mostrar un producto específico
    mostrarUno: (req, res) => {
        const id = parseInt(req.params.id);
        const producto = productosController.productos.find(p => p.id === id);
        
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
            res.send('Producto no encontrado');
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
            descripcion: req.body.descripcion
        };
        
        productosController.productos.push(nuevoProducto);
        res.send(`
            <h1>✅ Producto guardado exitosamente</h1>
            <p>El producto "${nuevoProducto.nombre}" ha sido agregado.</p>
            <a href="/productos">Ver todos los productos</a>
        `);
    }
};

module.exports = productosController;
```

**Paso 2: Actualiza `routes/productos.js` para manejar formularios**

```javascript
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Middleware para procesar datos de formularios
router.use(express.urlencoded({ extended: true }));

// Rutas
router.get('/', productosController.mostrarTodos);
router.get('/crear', productosController.crear);
router.post('/', productosController.guardar);
router.get('/:id', productosController.mostrarUno);

module.exports = router;
```

---

## **Ejercicio para ti:**

1. **Actualiza** el controlador con el código que te di
2. **Actualiza** la ruta para incluir el middleware de formularios
3. **Prueba** las siguientes URLs:
   - `http://localhost:3000/productos` (ver lista)
   - `http://localhost:3000/productos/1` (ver producto específico)
   - `http://localhost:3000/productos/crear` (formulario para agregar)

**¿Qué te parece esto? ¿Quieres que continuemos con los otros controladores?**

```javascript
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
            codigo: "PARL-001"
        },
        {
            id: 2,
            nombre: "Auriculares Sony WH-1000XM4",
            categoria: "Auriculares",
            precio: 45000,
            stock: 3,
            descripcion: "Auriculares inalámbricos con cancelación de ruido",
            marca: "Sony",
            codigo: "AUR-001"
        },
        {
            id: 3,
            nombre: "Teclado Mecánico Logitech G Pro",
            categoria: "Teclados",
            precio: 12000,
            stock: 5,
            descripcion: "Teclado gaming con switches mecánicos",
            marca: "Logitech",
            codigo: "TEC-001"
        }
    ],

    // Mostrar todos los productos
    mostrarTodos: (req, res) => {
        res.send(`
            <h1>📦 Productos de Amek th</h1>
            <h2>Lista de productos disponibles:</h2>
            
            ${productosController.productos.map(producto => `
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
            `).join('')}
            
            <br>
            <a href="/productos/crear">➕ Agregar nuevo producto</a>
        `);
    },

    // Mostrar un producto específico
    mostrarUno: (req, res) => {
        const id = parseInt(req.params.id);
        const producto = productosController.productos.find(p => p.id === id);
        
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
            res.send('Producto no encontrado');
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
            descripcion: req.body.descripcion
        };
        
        productosController.productos.push(nuevoProducto);
        res.send(`
            <h1>✅ Producto guardado exitosamente</h1>
            <p>El producto "${nuevoProducto.nombre}" ha sido agregado.</p>
            <a href="/productos">Ver todos los productos</a>
        `);
    }
};

module.exports = productosController;
```

```javascript
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Middleware para procesar datos de formularios
router.use(express.urlencoded({ extended: true }));

// Rutas
router.get('/', productosController.mostrarTodos);
router.get('/crear', productosController.crear);
router.post('/', productosController.guardar);
router.get('/:id', productosController.mostrarUno);

module.exports = router;
```

---

**User**

explicame bien que es lo que hiciste en el controlador, que metodos usaste y porque?

---

**Cursor**

¡Excelente pregunta! Es muy importante que entiendas cada parte del código. Te voy a explicar paso a paso qué hice y por qué.

## 🧠 **Explicación detallada del controlador**

### **1. Estructura del controlador**

```javascript
const productosController = {
    // Propiedades y métodos aquí
};
```

**¿Por qué uso un objeto?**
- **Organización**: Agrupa todas las funciones relacionadas con productos
- **Reutilización**: Puedo importar todo el controlador de una vez
- **Claridad**: Es fácil ver qué funciones pertenecen a productos

### **2. Array de datos de ejemplo**

```javascript
productos: [
    {
        id: 1,
        nombre: "Parlante Bluetooth JBL Flip 5",
        // ... más propiedades
    }
]
```

**¿Por qué un array con objetos?**
- **Simula una base de datos**: Por ahora usamos datos en memoria
- **Estructura clara**: Cada producto tiene propiedades específicas
- **Fácil de manipular**: Podemos usar métodos como `find()`, `map()`, `push()`

### **3. Método `mostrarTodos`**

```javascript
mostrarTodos: (req, res) => {
    res.send(`
        <h1>📦 Productos de Amek th</h1>
        ${productosController.productos.map(producto => `
            <div>
                <h3>${producto.nombre}</h3>
                // ... más HTML
            </div>
        `).join('')}
    `);
}
```

**¿Qué hace este método?**
- **Recibe**: `req` (request) y `res` (response) de Express
- **Usa `map()`**: Convierte cada producto en HTML
- **Usa `join('')`**: Une todos los elementos del array en un string
- **Envía**: HTML completo al navegador

**¿Por qué `map()`?**
- **Transformación**: Convierte datos (objetos) en HTML
- **Iteración**: Procesa todos los productos automáticamente
- **Limpio**: No necesitas bucles `for` tradicionales

### **4. Método `mostrarUno`**

```javascript
mostrarUno: (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productosController.productos.find(p => p.id === id);
    
    if (producto) {
        // Mostrar producto
    } else {
        res.send('Producto no encontrado');
    }
}
```

**¿Qué hace este método?**
- **`req.params.id`**: Obtiene el ID de la URL (ej: `/productos/1` → `id = "1"`)
- **`parseInt()`**: Convierte string a número
- **`find()`**: Busca el producto con ese ID
- **Validación**: Si encuentra el producto, lo muestra; si no, muestra error

**¿Por qué `find()`?**
- **Búsqueda eficiente**: Para cuando encuentre el primer elemento que coincida
- **Retorna el elemento**: No un array como `filter()`
- **Retorna `undefined`**: Si no encuentra nada

### **5. Método `crear`**

```javascript
crear: (req, res) => {
    res.send(`
        <h1>➕ Agregar Nuevo Producto</h1>
        <form action="/productos" method="POST">
            <input type="text" name="nombre" required>
            // ... más campos
        </form>
    `);
}
```

**¿Qué hace este método?**
- **Muestra un formulario HTML**: Para que el usuario ingrese datos
- **`method="POST"`**: Los datos se envían al método `guardar`
- **`action="/productos"`**: La URL donde se envían los datos
- **`required`**: Validación básica del lado del cliente

### **6. Método `guardar`**

```javascript
guardar: (req, res) => {
    const nuevoProducto = {
        id: productosController.productos.length + 1,
        nombre: req.body.nombre,
        precio: parseInt(req.body.precio),
        // ... más propiedades
    };
    
    productosController.productos.push(nuevoProducto);
    res.send('Producto guardado exitosamente');
}
```

**¿Qué hace este método?**
- **`req.body`**: Contiene los datos del formulario
- **Crea nuevo objeto**: Con los datos recibidos
- **Genera ID automático**: Usando la longitud del array + 1
- **`push()`**: Agrega el producto al array
- **`parseInt()`**: Convierte strings a números donde sea necesario

**¿Por qué `push()`?**
- **Agrega al final**: Mantiene el orden
- **Modifica el array original**: No crea uno nuevo
- **Retorna la nueva longitud**: Útil para saber cuántos elementos hay

---

## 🎯 **Conceptos clave que usé:**

### **Métodos de Array:**
- **`map()`**: Transformar elementos
- **`find()`**: Buscar un elemento específico
- **`push()`**: Agregar al final
- **`join()`**: Unir elementos en string

### **Métodos de String:**
- **`parseInt()`**: String a número
- **Template literals**: `` `${variable}` ``

### **Express.js:**
- **`req.params`**: Parámetros de la URL
- **`req.body`**: Datos del formulario
- **`res.send()`**: Enviar respuesta

---

## **¿Tienes alguna duda específica sobre alguno de estos métodos o conceptos?**

**Ejercicio de reflexión:**
1. ¿Qué pasaría si dos usuarios agregaran productos al mismo tiempo?
2. ¿Por qué crees que necesitamos `parseInt()` en algunos campos?
3. ¿Qué ventajas y desventajas tiene usar un array en lugar de una base de datos?

```javascript
const productosController = {
    // Propiedades y métodos aquí
};
```

```javascript
productos: [
    {
        id: 1,
        nombre: "Parlante Bluetooth JBL Flip 5",
        // ... más propiedades
    }
]
```

```javascript
mostrarTodos: (req, res) => {
    res.send(`
        <h1>📦 Productos de Amek th</h1>
        ${productosController.productos.map(producto => `
            <div>
                <h3>${producto.nombre}</h3>
                // ... más HTML
            </div>
        `).join('')}
    `);
}
```

```javascript
mostrarUno: (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productosController.productos.find(p => p.id === id);
    
    if (producto) {
        // Mostrar producto
    } else {
        res.send('Producto no encontrado');
    }
}
```

```javascript
crear: (req, res) => {
    res.send(`
        <h1>➕ Agregar Nuevo Producto</h1>
        <form action="/productos" method="POST">
            <input type="text" name="nombre" required>
            // ... más campos
        </form>
    `);
}
```

```javascript
guardar: (req, res) => {
    const nuevoProducto = {
        id: productosController.productos.length + 1,
        nombre: req.body.nombre,
        precio: parseInt(req.body.precio),
        // ... más propiedades
    };
    
    productosController.productos.push(nuevoProducto);
    res.send('Producto guardado exitosamente');
}
```

---

**User**

en donde me guarda los productos que agrego? porq en el objeto productos no me lo agrega, entonces no entiendo como se guarda

---

**Cursor**

¡Excelente pregunta! Es muy importante que entiendas esto. Te voy a explicar exactamente dónde se guardan los productos y por qué no los ves en el código.

## 🧠 **¿Dónde se guardan los productos?**

### **El problema que estás viendo:**

Los productos se guardan **solo en la memoria RAM** del servidor, **NO en el archivo del código**. Esto significa que:

✅ **Sí se guardan** - En la memoria mientras el servidor está corriendo  
❌ **No se guardan** - En el archivo `productosController.js`  
❌ **Se pierden** - Cuando reinicias el servidor  

---

## 🔍 **Vamos a verificar esto paso a paso:**

### **Paso 1: Agrega un producto**
1. Ve a `http://localhost:3000/productos/crear`
2. Llena el formulario y envía
3. Ve a `http://localhost:3000/productos`

**¿Qué ves?** - El producto aparece en la lista

### **Paso 2: Verifica en el código**
1. Abre `controllers/productosController.js`
2. Busca el array `productos`

**¿Qué ves?** - Solo los 3 productos originales

### **Paso 3: Reinicia el servidor**
1. Detén el servidor (Ctrl+C)
2. Vuelve a iniciarlo (`npm start`)
3. Ve a `http://localhost:3000/productos`

**¿Qué ves?** - Solo los 3 productos originales, el nuevo desapareció

---

## 🎯 **¿Por qué pasa esto?**

### **Memoria vs Archivo:**

```javascript
// Esto está en el ARCHIVO (permanente)
productos: [
    { id: 1, nombre: "Parlante JBL", ... },
    { id: 2, nombre: "Auriculares Sony", ... },
    { id: 3, nombre: "Teclado Logitech", ... }
]

// Esto se guarda en la MEMORIA (temporal)
productosController.productos.push(nuevoProducto);
```

**Cuando haces `push()`:**
- ✅ Se agrega al array en **memoria**
- ❌ **NO** se modifica el archivo
- ❌ Se pierde al reiniciar

---

## 🔧 **Vamos a agregar logs para verificar:**

**Actualiza el método `guardar` en `controllers/productosController.js`:**

```javascript
guardar: (req, res) => {
    console.log('�� Datos recibidos:', req.body);
    
    const nuevoProducto = {
        id: productosController.productos.length + 1,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: parseInt(req.body.precio),
        stock: parseInt(req.body.stock),
        marca: req.body.marca,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion
    };
    
    console.log('�� Producto a agregar:', nuevoProducto);
    console.log('�� Productos antes:', productosController.productos.length);
    
    productosController.productos.push(nuevoProducto);
    
    console.log('📊 Productos después:', productosController.productos.length);
    console.log('📋 Lista completa:', productosController.productos);
    
    res.send(`
        <h1>✅ Producto guardado exitosamente</h1>
        <p>El producto "${nuevoProducto.nombre}" ha sido agregado.</p>
        <p>Total de productos: ${productosController.productos.length}</p>
        <a href="/productos">Ver todos los productos</a>
    `);
}
```

---

## 🧪 **Ejercicio para verificar:**

1. **Agrega los logs** al método `guardar`
2. **Reinicia el servidor**
3. **Agrega un producto nuevo**
4. **Mira la consola** donde está corriendo el servidor
5. **Verifica** que aparezcan los logs

**¿Qué deberías ver en la consola?**
```
�� Datos recibidos: { nombre: '...', precio: '...', ... }
�� Producto a agregar: { id: 4, nombre: '...', ... }
�� Productos antes: 3
�� Productos después: 4
📋 Lista completa: [array con 4 productos]
```

---

## 🎯 **¿Por qué es importante entender esto?**

**Problemas actuales:**
- ❌ Los datos se pierden al reiniciar
- ❌ No hay persistencia
- ❌ No es útil para un negocio real

**Solución futura (FASE 5):**
- ✅ Base de datos (MongoDB, SQLite)
- ✅ Los datos se guardan permanentemente
- ✅ No se pierden al reiniciar

---

## **¿Quieres que probemos esto juntos?**

**Dime:**
1. ¿Qué ves en la consola cuando agregas un producto?
2. ¿Se pierde el producto cuando reinicias el servidor?
3. ¿Entiendes ahora la diferencia entre memoria y archivo?

**Esto es fundamental para entender por qué necesitamos una base de datos en la siguiente fase.**

```javascript
// Esto está en el ARCHIVO (permanente)
productos: [
    { id: 1, nombre: "Parlante JBL", ... },
    { id: 2, nombre: "Auriculares Sony", ... },
    { id: 3, nombre: "Teclado Logitech", ... }
]

// Esto se guarda en la MEMORIA (temporal)
productosController.productos.push(nuevoProducto);
```

```javascript
guardar: (req, res) => {
    console.log('�� Datos recibidos:', req.body);
    
    const nuevoProducto = {
        id: productosController.productos.length + 1,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: parseInt(req.body.precio),
        stock: parseInt(req.body.stock),
        marca: req.body.marca,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion
    };
    
    console.log('�� Producto a agregar:', nuevoProducto);
    console.log('�� Productos antes:', productosController.productos.length);
    
    productosController.productos.push(nuevoProducto);
    
    console.log('📊 Productos después:', productosController.productos.length);
    console.log('📋 Lista completa:', productosController.productos);
    
    res.send(`
        <h1>✅ Producto guardado exitosamente</h1>
        <p>El producto "${nuevoProducto.nombre}" ha sido agregado.</p>
        <p>Total de productos: ${productosController.productos.length}</p>
        <a href="/productos">Ver todos los productos</a>
    `);
}
```

```plaintext
�� Datos recibidos: { nombre: '...', precio: '...', ... }
�� Producto a agregar: { id: 4, nombre: '...', ... }
�� Productos antes: 3
�� Productos después: 4
📋 Lista completa: [array con 4 productos]
```

---

**User**

excelente, ahora vamos con el de clientes pero dejamelo ahcer a mi

---

**Cursor**

¡Perfecto! Me encanta que quieras hacerlo tú mismo. Es la mejor manera de aprender.

## �� **Ejercicio: Crear el controlador de clientes**

### **Lo que necesitas hacer:**

**Paso 1: Crear `controllers/clientesController.js`**

Necesitas crear un controlador similar al de productos, pero para clientes.

**Campos que podrías necesitar para un cliente:**
- **ID** (automático)
- **Nombre completo**
- **Email**
- **Teléfono**
- **Dirección**
- **Fecha de registro**
- **Historial de compras** (por ahora puede estar vacío)

**Funcionalidades que necesitas:**
- **Mostrar todos los clientes**
- **Mostrar un cliente específico**
- **Formulario para crear cliente**
- **Guardar nuevo cliente**

**Paso 2: Modificar `routes/clientes.js`**

Para que use el controlador en lugar de tener la lógica directamente.

---

## 🧠 **Preguntas para guiarte:**

1. **¿Qué información específica necesitas de tus clientes?**
2. **¿Quieres que los clientes tengan algún campo especial?** (ej: tipo de cliente, preferencias)
3. **¿Cómo quieres mostrar la lista de clientes?**

---

## 💡 **Tips para ayudarte:**

- **Copia la estructura** del controlador de productos
- **Cambia los nombres** de las variables y métodos
- **Adapta los campos** según lo que necesites para clientes
- **Usa datos de ejemplo** realistas para tu emprendimiento

---

## �� **Cuando termines, dime:**

1. **¿Qué campos incluiste para los clientes?**
2. **¿Qué pasó cuando visitaste `/clientes`?**
3. **¿Pudiste agregar un cliente nuevo?**
4. **¿Se guardó correctamente en memoria?**

**¡Adelante! Tómate tu tiempo y no te frustres si algo no sale perfecto. Lo importante es que practiques y entiendas el concepto.**

**Si te atascas en algún punto, no dudes en preguntarme. Estoy aquí para ayudarte, no para hacerlo por ti.** 😊

---

**User**

que es lo que tengo mal en mi funcdion de mostraClientes?

---

**Cursor**

Para poder ayudarte con tu función `mostrarClientes`, necesito ver el código que escribiste. ¿Podrías mostrarme:

1. **El contenido de tu archivo `controllers/clientesController.js`**
2. **El contenido de tu archivo `routes/clientes.js`**

O si prefieres, puedes copiar y pegar específicamente la función `mostrarClientes` que no está funcionando.

**Mientras tanto, aquí tienes algunas cosas comunes que pueden estar mal:**

## 🔍 **Errores típicos en funciones de mostrar:**

### **1. Error en el nombre del método:**
```javascript
// ❌ Mal - nombre incorrecto
mostrarClientes: (req, res) => { ... }

// ✅ Bien - nombre correcto
mostrarTodos: (req, res) => { ... }
```

### **2. Error en la referencia al array:**
```javascript
// ❌ Mal - referencia incorrecta
${clientes.map(cliente => ...)}

// ✅ Bien - referencia correcta
${clientesController.clientes.map(cliente => ...)}
```

### **3. Error en la ruta:**
```javascript
// ❌ Mal - ruta incorrecta
router.get('/', clientesController.mostrarClientes);

// ✅ Bien - ruta correcta
router.get('/', clientesController.mostrarTodos);
```

### **4. Error en el middleware:**
```javascript
// ❌ Mal - falta el middleware
const router = express.Router();

// ✅ Bien - con middleware
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
```

**Muéstrame tu código y te ayudo a encontrar el problema específico.** 😊

```javascript
// ❌ Mal - nombre incorrecto
mostrarClientes: (req, res) => { ... }

// ✅ Bien - nombre correcto
mostrarTodos: (req, res) => { ... }
```

```javascript
// ❌ Mal - referencia incorrecta
${clientes.map(cliente => ...)}

// ✅ Bien - referencia correcta
${clientesController.clientes.map(cliente => ...)}
```

```javascript
// ❌ Mal - ruta incorrecta
router.get('/', clientesController.mostrarClientes);

// ✅ Bien - ruta correcta
router.get('/', clientesController.mostrarTodos);
```

```javascript
// ❌ Mal - falta el middleware
const router = express.Router();

// ✅ Bien - con middleware
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
```

---

**User**

podes revisar mi codigo

---

**Cursor**

¡Por supuesto! Déjame revisar tu código para ver qué está pasando con la función `mostrarClientes`.


¡Ahí está el problema! Encontré varios errores en tu código:

## 🐛 **Errores encontrados:**

### **1. Error en `routes/clientes.js` (línea 6):**

```javascript
// ❌ Mal - estás enviando la función, no ejecutándola
res.send(clientesController.mostrarClientes);

// ✅ Bien - debes ejecutar la función
clientesController.mostrarClientes(req, res);
```

### **2. Error en el controlador (línea 30):**

```javascript
// ❌ Mal - símbolo de peso en lugar de teléfono
<p><strong>Telefono:</strong> $${cliente.telefono}</p>

// ✅ Bien - sin símbolo de peso
<p><strong>Telefono:</strong> ${cliente.telefono}</p>
```

---

## �� **Código corregido:**

### **`routes/clientes.js` corregido:**

```javascript
const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Middleware para formularios
router.use(express.urlencoded({ extended: true }));

// Lista de clientes
router.get('/', clientesController.mostrarClientes);

module.exports = router;
```

### **`controllers/clientesController.js` corregido:**

```javascript
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
      apellido: "Victoriano",
      email: "victoriano@gmail.com",
      telefono: "1144556677",
      direccion: "Maestro santana 345",
      fecha_ingreso: "2025-04-25",
      historial_compras: [],
    },
  ],
  
  mostrarClientes: (req, res) => {
    res.send(`
      <h1>👥 Clientes de Amek th</h1>
      <h2>Lista de Clientes:</h2>
      ${clientesController.clientes
        .map(
          (cliente) => ` 
          <div style="border: 1px solid #ccc; margin: 10px; padding: 15px;">
              <h3>${cliente.nombre} ${cliente.apellido}</h3>
              <p><strong>Email:</strong> ${cliente.email}</p>
              <p><strong>Telefono:</strong> ${cliente.telefono}</p>
              <p><strong>Direccion:</strong> ${cliente.direccion}</p>
              <p><strong>Fecha de ingreso:</strong> ${cliente.fecha_ingreso}</p>
              <p><strong>Historial de compras:</strong> ${cliente.historial_compras.length} compras</p>
              <a href="/clientes/${cliente.id}">Ver detalles</a>
          </div>
          `
        )
        .join("")}
      <br>
      <a href="/clientes/crear">➕ Agregar nuevo cliente</a>
    `);
  },
};

module.exports = clientesController;
```

---

## 🎯 **Los errores principales eran:**

1. **No ejecutabas la función** - Solo la referenciabas
2. **Símbolo de peso extra** en el teléfono
3. **Falta el middleware** para formularios

**¡Corrige estos errores y debería funcionar perfectamente!** 😊

```javascript
// ❌ Mal - estás enviando la función, no ejecutándola
res.send(clientesController.mostrarClientes);

// ✅ Bien - debes ejecutar la función
clientesController.mostrarClientes(req, res);
```

```javascript
// ❌ Mal - símbolo de peso en lugar de teléfono
<p><strong>Telefono:</strong> $${cliente.telefono}</p>

// ✅ Bien - sin símbolo de peso
<p><strong>Telefono:</strong> ${cliente.telefono}</p>
```

```javascript
const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Middleware para formularios
router.use(express.urlencoded({ extended: true }));

// Lista de clientes
router.get('/', clientesController.mostrarClientes);

module.exports = router;
```

```javascript
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
      apellido: "Victoriano",
      email: "victoriano@gmail.com",
      telefono: "1144556677",
      direccion: "Maestro santana 345",
      fecha_ingreso: "2025-04-25",
      historial_compras: [],
    },
  ],
  
  mostrarClientes: (req, res) => {
    res.send(`
      <h1>👥 Clientes de Amek th</h1>
      <h2>Lista de Clientes:</h2>
      ${clientesController.clientes
        .map(
          (cliente) => ` 
          <div style="border: 1px solid #ccc; margin: 10px; padding: 15px;">
              <h3>${cliente.nombre} ${cliente.apellido}</h3>
              <p><strong>Email:</strong> ${cliente.email}</p>
              <p><strong>Telefono:</strong> ${cliente.telefono}</p>
              <p><strong>Direccion:</strong> ${cliente.direccion}</p>
              <p><strong>Fecha de ingreso:</strong> ${cliente.fecha_ingreso}</p>
              <p><strong>Historial de compras:</strong> ${cliente.historial_compras.length} compras</p>
              <a href="/clientes/${cliente.id}">Ver detalles</a>
          </div>
          `
        )
        .join("")}
      <br>
      <a href="/clientes/crear">➕ Agregar nuevo cliente</a>
    `);
  },
};

module.exports = clientesController;
```

