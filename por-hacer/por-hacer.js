const fs = require('fs');

var listadoPorHacer = [];

const grabarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })

}

const leerDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (err) {

        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    leerDB()

    let porHacer = {
        descripcion,
        completo: false
    }

    listadoPorHacer.push(porHacer);

    grabarDB();

    return porHacer;

}

const getListado = () => {

    listadoPorHacer = require('../db/data.json');
    if (!listadoPorHacer) {
        throw new Error('No se encontró el archivo correspondiente al listado', err);
        return 0
    }
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {

    leerDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index != -1) {
        listadoPorHacer[index].completo = completado;
        grabarDB();
        return listadoPorHacer[index]
    } else {
        return false
    }

}

const borrar = (descripcion) => {

    leerDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index != -1) {
        let borrado = listadoPorHacer.splice(index);
        console.log(borrado);
        grabarDB();
        return borrado
    } else {
        return false
    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}