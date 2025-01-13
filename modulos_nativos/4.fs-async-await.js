const{readFile} = require ('node:fs/promises');

//IIFE= Inmediatly Invohed Function Expression
(
   async ()=>{
console.log('Leyendo el primer archivo...')
const primerTxt= await readFile('./archivo.txt', 'utf-8')
console.log('Primer texto: ',primerTxt);

console.log ('Haciendo cosas mientras lee archivos...')
console.log('Leyendo el segundo archivo...')
const segundoText= await readFile('./archivo2.txt', 'utf-8')
console.log('Segundo texto: ',segundoText);

    }
)()

//ES ASINCRONO SECUENCIAL

