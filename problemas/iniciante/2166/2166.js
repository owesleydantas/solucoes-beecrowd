process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.split();
    const n = parseInt(entrada.shift());

    let saida = 0.0;
    if (n === 0) {
        saida = 1.0;
    } else {
        saida = 2.0;
        for (let i = 0; i < n - 1; ++i) {
            saida = 2.0 + 1.0 / saida;
        }
        saida = 1.0 + 1.0 / saida;
    }
    console.log(saida.toFixed(10));
});
