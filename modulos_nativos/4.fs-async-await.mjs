/*Top-Level Await:
 A partir de ES2022, puedes usar await directamente en el nivel superior de un módulo ESM,
sin necesidad de una función async envolvente.*/
import { readFile } from 'node:fs/promises';

console.log('Leyendo el primer archivo...')
const primerTxt= await readFile('./archivo.txt', 'utf-8')
console.log('Primer texto: ',primerTxt);

console.log ('Haciendo cosas mientras lee archivos...')
console.log('Leyendo el segundo archivo...')
const segundoText= await readFile('./archivo2.txt', 'utf-8')
console.log('Segundo texto: ',segundoText);

