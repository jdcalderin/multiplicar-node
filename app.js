const fs = require('fs');
const argv = require('yargs')
    .command('listar', 'imprime en consola tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        }
    })
    .argv



console.log(argv);

let base = 2;

let data = '';
for (let index = 1; index <= 10; index++) {

    //console.log(`${base} x ${index} = ${ base * index}`);
    data += `${base} x ${index} = ${ base * index} \n`;


}


fs.writeFile('tabla-2.txt', data, (err) => {
    if (err) throw err;
    console.log('el archivo fue creado!');
});