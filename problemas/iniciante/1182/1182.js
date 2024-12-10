process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split('\n');
    const linhaIndicada = parseInt(entrada.shift());
    const operacao = entrada.shift();

    let soma = 0.0;
    for (let i = 0; i < 12; ++i) {
        for (let j = 0; j < 12; ++j) {
            let numero = parseFloat(entrada.shift());

            if (j === linhaIndicada) {
                soma += numero;
            }
        }
    }

    if (operacao === 'S') {
        console.log(`${soma.toFixed(1)}`);
    } else if (operacao === 'M') {
        console.log(`${(soma / 12).toFixed(1)}`);
    }
});