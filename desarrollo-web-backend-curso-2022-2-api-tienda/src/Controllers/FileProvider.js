// Librería nativa de nodejs para manipular archivos (FileSystem)
const fs = require('fs');

class FileProvider {
    // METODO CONSTRUCTOR
    constructor(){

    }

    // METODOS DE LA CLASE

    readFile(path){
        const buffer = fs.readFileSync(path) //BUFFER: Archivo Hexadecimal que contiene los datos en Binario
        return buffer
    }

}

module.exports=FileProvider //FORMA DE EXPORT DE ECMA6script