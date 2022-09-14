// Import Express
const express = require('express');

// Instancia

const router = express.Router()

// Funciones

const crearCompras = (req, res) => {
    res.send("Creación de Compras")
}

const consultarCompras = (req, res) => {
    res.send("Consulta de Compras")
}

const obtenerCompras = (req, res) =>{
    res.send("Obtención de Compras")
}

// Routers

router.post("/compras", crearCompras)

router.put("/compras/:id", consultarCompras)

router.delete("/compras/:id", (req, res) => {
    res.send("Modificar Compras")
})

router.get("/compras", obtenerCompras)

// Export Routers

module.exports = router