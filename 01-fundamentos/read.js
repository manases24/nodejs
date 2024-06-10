// Modulo FileSystem
const fs = require('fs')

// Lee el archivo README.md
const data = fs.readFileSync('README.md', 'utf8')

// Remplaza el nombre React por Angular en el archivo README.md
const newData = data.replace(/React/ig, 'Angular')

// Escribimos un nuevo archivo
fs.writeFileSync('README-ANGULAR.md', newData)