// Importamos los módulos necesarios
const fs = require('node:fs/promises'); 
const path = require('node:path'); 
const picocolors = require ('picocolors');

// Obtenemos el directorio que queremos listar de los argumentos de la línea de comandos
// Si no se pasa un argumento, usamos el directorio actual '.'
const folder = process.argv[2] ?? '.';

// Definimos una función asíncrona principal para listar el contenido del directorio
async function ls(folder) {
    let files; // Variable para almacenar los nombres de los archivos y carpetas

    try {
        // Intentamos leer el contenido del directorio especificado
        files = await fs.readdir(folder);
    } catch {
        // Si ocurre un error, mostramos un mensaje y terminamos el proceso
        console.error(picocolors.red(`No se pudo leer el directorio ${folder}`));
        process.exit(1);
    }

    // Usamos `map` para crear una promesa por cada archivo/carpeta en el directorio
    const filesPromises = files.map(async (file) => {
        const filePath = path.join(folder, file); // Construimos la ruta completa del archivo

        let stats; // Variable para almacenar las estadísticas del archivo
        try {
            // Intentamos obtener información sobre el archivo (como tamaño, tipo, etc.)
            stats = await fs.stat(filePath);
        } catch {
            // Si ocurre un error, mostramos un mensaje y terminamos el proceso
            console.error(`No se pudo obtener la información de ${filePath}`);
            process.exit(1);
        }

        // Determinamos si el archivo es un directorio o un archivo regular
        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f'; // 'd' para directorios, 'f' para archivos

        // Obtenemos el tamaño del archivo en bytes
        const fileSize = stats.size.toString();

        // Obtenemos la fecha y hora de la última modificación
        const fileModified = stats.mtime.toLocaleString();

        // Formateamos la información para devolverla como una cadena
        return `${fileType} ${picocolors.blue(file.padEnd(20))} ${picocolors.green(fileSize.padStart(10))} 
        ${picocolors.yellow(fileModified)}`;
    });

    // Usamos `Promise.all` para esperar a que todas las promesas de `map` se resuelvan
    const filesInfo = await Promise.all(filesPromises);

    // Iteramos sobre la información de cada archivo y la mostramos en la consola
    filesInfo.forEach((fileInfo) => {
        console.log(fileInfo);
    });
}

// Llamamos a la función principal con el directorio especificado
ls(folder);
