const fs= require ('node:fs');

console.log('Leyendo el primer archivo...')
const text= fs.readFileSync('./archivo.txt', 'utf-8'); //SINCRONO, HAY QUE PONER LA CODIFICACION PARA QUE NO SALGA SOLO UN BUFFER CON DATOS
console.log(text);
console.log ('Haciendo cosas mientras lee archivos...')
console.log('Leyendo el segundo archivo...')
const text2= fs.readFileSync('./archivo2.txt', 'utf-8'); //SINCRONO, HAY QUE PONER LA CODIFICACION PARA QUE NO SALGA SOLO UN BUFFER CON DATOS
console.log(text2);
