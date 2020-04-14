/*const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea a realizar'
}

 const completado = {
    alias: 'c',
    default: true,
    desc: 'marcar el estado de la tarea a realizar'
}*/


const argv = require('yargs')
    .command('actualizar', 'Actualizar el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea a realizar'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'marcar el estado de la tarea a realizar'
        }
    })
    .command('crear', 'Crea una tarea por realizar', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea a realizar'
        }
    })
    .command('listar', 'Lista las tareas existentes', {})
    .command('borrar', 'borrar tarea indicada', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea a borrar'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}