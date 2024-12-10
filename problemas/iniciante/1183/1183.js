process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split('\n');
    let O = entrada.shift();
    let Matriz = [];

    let soma = 0.0;
    let count = 0;

    for (let i = 0; i < 12; ++i) {
        Matriz.push([]);
        for (let j = 0; j < 12; ++j) {
            Matriz[i].push(parseFloat(entrada.shift()));

            if (j > i) {
                soma += Matriz[i][j];
                ++count;
            }
        }
    }

    if (O === 'S') {
        console.log(`${soma.toFixed(1)}`);
    } else {
        console.log(`${(soma / count).toFixed(1)}`);
    }
});
