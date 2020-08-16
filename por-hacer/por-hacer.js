const fs = require('fs');





let listadoPorHacer = []

const saveToDb = () =>{
    
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err)=>{
        if(err) throw new Error("No se puede grabar la data... intentelo mas tarde..") // sobreescribe los cambios
    })

}

const chargeDb = ()=>{

    try {
        listadoPorHacer = require('../db/data.json')   // carga la "Base de datos en JSON"
    } catch (error) {
        listadoPorHacer =[]
    }
    
    console.log(listadoPorHacer)
}


const getListado = () =>{
    chargeDb();
   return listadoPorHacer;
}

const crear = (descripcion) => {
   
   chargeDb();
   
    let porHacer = {
        descripcion,
       completado: false
    
    }

 
    listadoPorHacer.push(porHacer); // save to list
    saveToDb();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    chargeDb();
    let index = listadoPorHacer.findIndex( tarea =>  tarea.descripcion === descripcion)
    
    if(index >=0){
        listadoPorHacer[index].completado = completado;
        saveToDb();
        return true;
    }else{
        return false;
    }




}


const Delete = (descripcion) =>{
    
    chargeDb();
     let data = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion); // filter() ,filter elements in list by condition and put it on new list
    
      if(listadoPorHacer.length===data.length){
          return false
      }else{
          
          listadoPorHacer = data; // return the list var to the origin list !!
          saveToDb();

      }
        
    
   
    
   




}
module.exports = {
    crear,
    getListado,
    actualizar,
    Delete
}
