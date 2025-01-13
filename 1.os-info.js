const os = require ('node:os');

console.log ('Información del Sistema Operativo');
console.log('---------------------------------------');
console.log('Nombre del sistema operativo: '+ os.platform());
console.log('Versión del sistema operativo: '+ os.version());
console.log('Arquitectura del sistema operativo: '+ os.arch());
console.log('CPUs: '+ os.cpus()); //Con esto se puede escalar procesos en NODE
console.log('Memoria libre : '+ os.freemem()/1024/1024);
console.log('Memoria total : '+ os.totalmem()/1024/1024);