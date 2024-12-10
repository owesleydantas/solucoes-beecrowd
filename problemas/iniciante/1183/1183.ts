process.stdin.setEncoding('utf-8');

let input: string = '';

process.stdin.on('data', (chunk: string) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada: string[] = input.trim().split('\n')
    let O: string = entrada.shift() as string;
    let Matriz: number[][] = [];

    let soma: number = 0.0;
    let count: number = 0;

    for (let i = 0; i < 12; ++i) {
        Matriz.push([]);
        for (let j = 0; j < 12; ++j) {
            Matriz[i].push(parseFloat(entrada.shift() as string));

            if (j > i) {
                soma += Matriz[i][j];
                ++count;
            }
        }
    }

    if (O === 'S') {
        console.log(`${soma.toFixed(1)}`);
    } else if (O === 'M') {
        console.log(`${(soma / count).toFixed(1)}`);
    }


});
