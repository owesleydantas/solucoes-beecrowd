process.stdin.setEncoding('utf-8');

let input: string = '';

process.stdin.on('data', (chunk: string) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada: string[] = input.trim().split('\n');
    const linhaIndicada: number = parseInt(entrada.shift() as string);
    const operacao: string = entrada.shift() as string;

    let soma: number = 0.0;

    for (let i = 0; i < 12; ++i) {
        for (let j = 0; j < 12; ++j) {
            const numero: number = parseFloat(entrada.shift() as string);

            if (i === linhaIndicada) {
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
