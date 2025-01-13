//CJS import module require
// const sum = require ('./sum'); Asi podria llamarse sum o llamarse funcion x
//Para obligar a que use el mismo nombre con el que se creó
const { sum } = require ('./sum');

console.log(sum(3,2));