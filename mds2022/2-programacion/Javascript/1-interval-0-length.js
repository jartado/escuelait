
const { Console } = require('console-mpds');
const console = new Console();


const min = console.readNumber('Introduce el mínimo del intervalo:');
const max = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo):');

const longitud = max - min;

console.writeln(`La longitud del intervalo [${min}, ${max}] es ${longitud}`);


// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 9
// La longitud del intervalo [4, 9] es 5

// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 4
// La longitud del intervalo [4, 4] es 0
