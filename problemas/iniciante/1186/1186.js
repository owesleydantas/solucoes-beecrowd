const { endianness } = require("os");

process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split('\n');
    const O = entrada.shift();
    
    let soma = 0.0;
    let count = 0;

    for (let i = 0; i < 12; ++i) {
        for (let j = 0; j < 12; ++j) {
            let valor = parseFloat(entrada.shift());

            if (j > 11 - i) {
                soma += valor;
                ++count;
            }
        }
    }

    console.log(`${(O === 'S' ? soma : soma / count).toFixed(1)}`);
});
