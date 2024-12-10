process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split('\n');
    let O = entrada.shift();
    
    let soma = 0.0;
    let count = 0;

    for (let i = 0; i < 12; ++i) {
        for (let j = 0; j < 12; ++j) {
            let valor = parseFloat(entrada.shift());

            if (i > j) {
                soma += valor;
                ++count;
            }
        }
    }

    if (O === 'S') {
        console.log(`${soma.toFixed(1)}`);
    }else if (O === 'M') {
        console.log(`${(soma / count).toFixed(1)}`);
    }

});
