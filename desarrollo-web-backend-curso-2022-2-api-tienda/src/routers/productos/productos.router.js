
// Importar el framework
const express = require('express')

// Importar el FileProvider

const FileProvider = require('../../Controllers/FileProvider')

// Crear una instancia
const router = express.Router()

router.post('/productos', (req, res) => {
    res.send('Hello World!')
})

router.get('/productos', (req, res) => {
    try {
        const path = "./src/data/productos.json" //se ubica la ruta del json
        const fileProvider = new FileProvider() //Se crea la instancia de la clase
        const buffer = fileProvider.readFile(path)
        const productos = JSON.parse(buffer.toString()) //Conversión de BUFFER a String y de String a JSON
        res.send({
            ok:true,
            message: "Productos Consultados",
            data: productos
        })
    } catch (error) {
        const message="Ocurrió un Error"
        res.status(500).send(res.send({
            ok:false,
            message,
            data: error.toString()
        })) //Envía el Código de Estado 500(Internal Server Error)
    }
})

router.put('/productos/:id', (req, res) => {
    res.send('Hello World!')
})

router.delete('/productos/:id', (req, res) => {
    res.send('Hello World!')
})

module.exports = router
