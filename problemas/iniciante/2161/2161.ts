process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.split('\n');
    const n = parseInt(entrada.shift() as string);

    let saida = 0.0;
    if (n === 0) {
        saida = 3.0;
    } else {
        saida = 6.0;
        for (let i = 0; i < n - 1; ++i) {
            saida = 6.0 + 1.0 / saida;
        }
        saida = 3.0 + 1.0 / saida;
    }
    console.log(saida.toFixed(10));
});
