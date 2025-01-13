const fs= require ('node:fs');
const {promisify} = require ('node:util');
const readFilePromises = promisify(fs.readFile);


console.log('Leyendo el primer archivo...')
readFilePromises('./archivo.txt', 'utf-8')
.then(text=>{
    console.log('Primer texto: ',text);
}); 
console.log ('Haciendo cosas mientras lee archivos...')
console.log('Leyendo el segundo archivo...')
readFilePromises('./archivo2.txt', 'utf-8')
.then(text=>{
    console.log('Segundo texto: ',text);
}); 

//CUANDO NO EXISTE UNA VERSION NATIVA PARA USAR PROMESAS

