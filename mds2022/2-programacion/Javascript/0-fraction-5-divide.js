
const { Console } = require('console-mpds');
const console = new Console();


const numerator1 = console.readNumber('Primera fracción\nIntroduce el numerador de la fracción:');
const denominator1 = console.readNumber('Introduce el denominador de la fracción:');
const numerator2 = console.readNumber('Segunda fracción\nIntroduce el numerador de la fracción:');
const denominator2 = console.readNumber('Introduce el denominador de la fracción:');

const numerator = numerator1 * denominator2;
const denominator = denominator1 * numerator2;

console.writeln(`El cociente de la fracción ${numerator1}/${denominator1} y la fracción ${numerator2}/${denominator2} es la fracción ${numerator}/${denominator}`);


// Primera fracción:
// Introduce el numerador de la fracción: 2
// Introduce el denominador de la fracción: 3
// Segunda fracción:
// Introduce el numerador de la fracción: 3
// Introduce el denominador de la fracción: 4

// La suma de la fracción 2/3 y la fracción 3/4 es la fracción 8/9