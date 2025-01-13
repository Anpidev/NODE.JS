//CJS module exports

function sum(a,b) {
   return a+b 
}

// module.exports=sum; con esta forma al importar se le podria cambiar el nombre a la variable
//Para obligar que sea nombrado igual
module.exports={
    sum
}