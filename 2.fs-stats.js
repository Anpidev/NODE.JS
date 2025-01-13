//File System

const { Console } = require('node:console');
const fs = require ('node:fs'); //A partir de NODE 16 se recomienda poner el prefijo node: (antes del modulo nativo)

//Sincrono 
const stats = fs.statSync('archivo.txt');

console.log(stats.isFile(), stats.isDirectory(),stats.isSymbolicLink(),
stats.size);