const fs = require("fs");
const { resolve } = require("path");
const colors = require('colors');

//PROMESA

// const crearArchivo = ( base = 5 ) => {
//     return new Promise( (resolve, reject) => {
//         console.log('===================');
//         console.log('    Tabla del:', base);
//         console.log('===================');

//         let salida = '';

//         for ( let i = 1; i <= 10; i++) {
//             salida += `${ base } x ${ i } = ${ base * i }\n`;
//         };

//         console.log(salida);

//         fs.writeFileSync(`Tabla-${ base }.txt`, salida);

//         resolve(`Tabla-${ base }.txt`);
//     })
// }

//METODO ASINCRONO

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    try {
        
        let salida, consola = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ colors.blue( base ) } ${ 'x'.green } ${ colors.blue( i ) } ${ '='.green } ${ colors.blue( base * i ) }\n`;
        }

        if ( listar ) {
            console.log("===================".green);
            console.log("    Tabla del:".blue, colors.blue(base));
            console.log("===================".green);
    
            console.log(consola);
        }

        fs.writeFileSync(`./salidas/Tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`;
    }catch(err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
