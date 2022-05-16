
const { Console } = require('console-mpds');
const console = new Console();

const DAYS_PER_MONTH = 30;
const DAYS_PER_YEAR = 12 * DAYS_PER_MONTH;
const MONTHS_PER_SEASON = 3;
const DAYS_PER_SEASON = MONTHS_PER_SEASON * DAYS_PER_MONTH;
const OFFSET_DAYS = 21 + 2 * DAYS_PER_MONTH;

function calculaFecha(day, month, year) {

    // const day = console.readNumber('Escriba un día (1-30):');
    // const month = console.readNumber('Escriba un mes (1-12):');
    // const year = console.readNumber('Escriba un año (1-...):');
    
    const periods = ["a primeros", "a mediados", "a finales"];
    const seasons = ["primavera", "verano", "otoño", "invierno"];
    
    const dayOfYear = DAYS_PER_MONTH * (month - 1) + day;
    const dayOfSolarYear = dayOfYear >= OFFSET_DAYS ? dayOfYear - OFFSET_DAYS + 1 : dayOfYear - OFFSET_DAYS + DAYS_PER_YEAR;
    
    const period = periods[parseInt(dayOfSolarYear / DAYS_PER_MONTH) % MONTHS_PER_SEASON];
    const season = seasons[parseInt((dayOfSolarYear - 1) / DAYS_PER_SEASON )];
    
    console.writeln(`El día ${day} del ${month} de ${year} cae ${period} de ${season}.`);
}

calculaFecha(1, 1, 2022);
calculaFecha(21, 1, 2022);
calculaFecha(20, 3, 2022);
calculaFecha(21, 3, 2022);
calculaFecha(21, 4, 2022);
calculaFecha(20, 6, 2022);
calculaFecha(21, 6, 2022);
calculaFecha(21, 7, 2022);
calculaFecha(20, 9, 2022);
calculaFecha(21, 9, 2022);
calculaFecha(21, 10, 2022);
calculaFecha(20, 12, 2022);
calculaFecha(21, 12, 2022);
calculaFecha(30, 12, 2022);



// Considerar todos los meses de 30 días
// Las estaciones comienzan: invierno el 21/12; primavera el 21/3; verano el 21/6; otoño el 21/9
// Considerar: "a primeros" los 30 primeros días de la estación; "a mediados" los siguientes 30 días de la estación; "a finales" los últimos 30 días de la estación

// Escriba un día (1-30):  29
// Escriba un mes (1-12):  1
// Escriba un año (1-...):  2022
// El día 29 del 1 de 2022 cae a mediados de invierno.
