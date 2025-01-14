const http = require('node:http')
const { findPort } = require('./10.free-port.js')

const server = http.createServer((req, res) => {
console.log('Request recibido')
res.end('Hola mundo')
})

findPort(3000).then(port => {
    server.listen(port, () => {
        console.log(`Puerto http://localhost:${port} en escucha`)
    })
})
