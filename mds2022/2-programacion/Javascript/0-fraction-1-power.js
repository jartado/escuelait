
const { Console } = require('console-mpds');
const console = new Console();


const numerator = console.readNumber('Introduce el numerador de la fracción:');
const denominator = console.readNumber('Introduce el denominador de la fracción:');
const power = console.readNumber('Introduce un exponente:');

console.writeln(``);
console.writeln(`La fracción ${numerator}/${denominator} elevado a ${power} es la fracción ${numerator**power}/${denominator**power}`);
