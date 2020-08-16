
const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');

console.log(argv)

let comando = argv._[0]

switch (comando){
       
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea)
       
    break;

    case 'listar':
       let listado = porHacer.getListado();

       for (const tarea of listado) {
           console.log('=============Por===hacer========='.green);
           console.log(tarea.descripcion);
           console.log('Estado de la tarea :', tarea.completado)
           console.log('======================================='.green)           
       }
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado)
    break;

    case 'delete':
       let borrado = porHacer.Delete(argv.descripcion);
       console.log(borrado);
       
    break;

    default:
        console.log("comando no reconocido")
}