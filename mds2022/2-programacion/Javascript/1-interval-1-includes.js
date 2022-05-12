
const { Console } = require('console-mpds');
const console = new Console();


const min = console.readNumber('Introduce el mínimo del intervalo:');
const max = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo):');
const num = console.readNumber('Introduce un punto:');

const include = num >= min && num <= max ? 'sí' : 'no';

console.writeln(`El intervalo [${min}, ${max}] ${include} incluye el punto ${num}`);


// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 9
// Introduce un punto: 2
// El intervalo [4, 9] no incluye el punto 2

// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 9
// Introduce un punto: 5
// El intervalo [4, 9] si incluye el punto 5

// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 9
// Introduce un punto: 9
// El intervalo [4, 9] si incluye el punto 9

// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 9
// Introduce un punto: 12
// El intervalo [4, 9] no incluye el punto 12

// Introduce el mínimo del intervalo: 4
// Introduce el máximo del intervalo (superior o igual al mínimo): 4
// Introduce un punto: 4
// El intervalo [4, 4] si incluye el punto 4
