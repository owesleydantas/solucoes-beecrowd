process.stdin.setEncoding('utf-8');

let input: string = '';

process.stdin.on('data', (chunk: string) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada: string[] = input.trim().split('\n');
    const C: number = parseInt(entrada.shift() as string);
    const T: string = entrada.shift() as string;

    let soma: number = 0.0;

    for (let i = 0; i < 12; ++i) {
        for (let j = 0; j < 12; ++j) {
            let valor: number = parseFloat(entrada.shift() as string);

            if (j === C) {
                soma += valor;
            }
        }
    }

    if (T === 'S') {
        console.log(`${soma.toFixed(1)}`);
    } else if (T === 'M') {
        console.log(`${(soma / 12).toFixed(1)}`);
    }
});
