const fs= require ('node:fs');

/*console.log('Leyendo el primer archivo...')
const text= fs.readFileSync('./archivo.txt', 'utf-8'); //SINCRONO, HAY QUE PONER LA CODIFICACION PARA QUE NO SALGA SOLO UN BUFFER CON DATOS
console.log(text);
console.log ('Haciendo cosas mientras lee archivos...')
console.log('Leyendo el segundo archivo...')
const text2= fs.readFileSync('./archivo2.txt', 'utf-8'); //SINCRONO, HAY QUE PONER LA CODIFICACION PARA QUE NO SALGA SOLO UN BUFFER CON DATOS
console.log(text2);
De esta forma mostraria los logs de forma secuencial pero no dejaria realizar nada mientras se lee
los archivos - forma sincrona */

//-----ASINCRONA-------
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (error, txt)=>{
    console.log('Primer texto: ',txt);
}); 
console.log ('Haciendo cosas mientras lee archivos...')
console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8',(error, txt)=>{
    console.log('Segundo texto: ',txt);
}); 

//EJECUTA ANTES EL HACIENDO COSAS QUE EL TEXTO1