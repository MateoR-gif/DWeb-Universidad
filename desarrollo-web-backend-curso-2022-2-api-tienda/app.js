
// Importar el framework
const express = require('express')
// Importar la librería para habilitar el permiso CORS
const cors = require('cors')

// Crear una instancia 
const app = express()
const routerProducts = require('./src/routers/productos/productos.router');
const routerBuys = require('./src/routers/compras/compras.router')

// Usar CORS
app.use(cors())

// DEFINICION DE ENDPOINTS (RECURSOS)
app.use(routerProducts)
app.use(routerBuys)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Ejecución del API: http://localhost:${PORT}`)
})
