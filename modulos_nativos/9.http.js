const http = require('node:http')

const server = http.createServer((req, res) => {
console.log('Request recibido')
res.end('Hola mundo')
})

/*  FORMA CONVENCIONAL DE AÑADIR PUERTO (PARA PRODUCCION)
server.listen(3000, () => {
console.log('Puerto 3000 en escucha')
}) */

//  FORMA PARA QUE DETECTE EL PRIMER PUERTO LIBRE AUT. PARA DEV
server.listen(0, () => {
    console.log(`Puerto http://localhost:${server.address().port} en escucha`)
    })
