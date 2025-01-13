const path = require ('node:path');

//En window y unix la separacion de path es diferente
//unix /
//windows \
//Para saber como es en tu os :
console.log(path.sep);


//unir rutas con path.join
const filePath= path.join('content','subfolder','text.txt');
console.log(filePath);

//nombre fichero de una ruta
const base = path.basename('./opt/temp/unix/password.txt');
console.log(base);
//sin la extension
const fileName = path.basename('./opt/temp/unix/password.txt', '.txt');
console.log(fileName);

//Conseguir la extension
const extension = path.extname('image.jpg');
console.log(extension);