//Argumentos de entrada
console.log(process.argv);

//controlar el proceso y su salida
process.exit();

//podemos controlar los eventos del proceso
process.on('exit', ()=>{
    //limpiar los recursos 
});

//Current working directory
console.log(process.csw());