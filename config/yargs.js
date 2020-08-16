const descripcion = {
    demand: true,
    alias: 'd',
    desc:'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c', 
    desc:"Marca como completado o pendiente la tarea"
}



const argv = require('yargs')
    .command('crear', 'Crea una tarea para agregar a la lista ToDoApp', { // se crea comando y s
        descripcion})
    .command('actualizar', 'actualiza el estado de la tarea de la lista', {
        descripcion,
        completado,
        

        

        

    }).command('delete','borrar una tarea por descripcion',{
        descripcion
    })
    .help()
    .argv;


    module.exports = {
        argv
    }