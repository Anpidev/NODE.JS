const fs= require ('node:fs');

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