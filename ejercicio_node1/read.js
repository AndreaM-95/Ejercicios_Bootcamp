// TODO: EJECUTÉ EL ARCHIVO CON EL COMANDO node read.js

//1. Escribe un programa que lea un archivo de texto y muestre su contenido en la consola.
const fs = require('fs'); 
fs.readFile('archive.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); 
});

//2. Escribe un programa que cree un archivo de texto con el contenido que el usuario introduzca por teclado.
/*const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, digita algo: ', (input) => {
  fs.writeFile('archive.txt', input, (err) => { 
    if (err) throw err; 
    console.log('Texto escrito en archivo.txt correctamente'); 
    rl.close();
  });
});*/

//3. Escribe un programa que cree un directorio y luego copie un archivo a ese directorio
/*const fs = require('fs');

fs.mkdir('holaNodejs', (err) => {                                 // Crear el directorio
  if (err) throw err; 
  console.log('Directorio creado correctamente'); 
  
  fs.readFile('archive.txt', 'utf8', (err, data) => {             // Leer el contenido del archivo
    if (err) throw err;

    fs.writeFile('holaNodejs/archive.txt', data, (err) => {       // Escribir el contenido del archivo en el nuevo directorio
      if (err) throw err; 
      console.log('Archivo copiado correctamente'); 
    });
  });
});*/