const { ifError } = require('node:assert');
const { error } = require('node:console');
const fs = require ('node:fs');
const folder= process.argv[2] ?? '.';

fs.readdir(folder ,(err,files)=>{
if (err) {
    console.error('Error al leer el directorio '+ err);
    return;
}
files.forEach(file => {
   console.log(file) 
});
})