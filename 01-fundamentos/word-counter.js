// FileSystem
const fs = require('fs')

// Lee el archivo README.md
const data = fs.readFileSync('README.md', 'utf8')

const words = data.split(' ')
const wordCount = words.length
const wordReact = words.filter((w) => w == 'React').length

console.log('Palabras: ', wordCount)
console.log('Palabras React: ', wordReact)
