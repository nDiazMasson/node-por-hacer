const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];
console.log(argv);

switch (comando) {
    case 'crear':

        let resp = porHacer.crear(argv.descripcion)
        console.log('Crear por hacer', resp);
        break;

    case 'listar':

        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=========Tarea por Hacer========='.bgYellow.black);
            console.log(tarea);
            console.log('================================='.bgYellow.black);
        }
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        if (actualizado === false) {
            console.log(`La tarea ${argv.descripcion} no ha sido encontrada en la BBDD`);
        } else {
            console.log(actualizado);
        }
        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`Tarea ${borrado[0].descripcion} eliminada de la BBDD`);
        break;

    default:
        console.log('comando no reconocido');
}