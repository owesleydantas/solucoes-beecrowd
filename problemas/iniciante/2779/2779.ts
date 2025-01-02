process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.split('\n');

    const N = parseInt(entrada.shift() as string);
    const M = parseInt(entrada.shift() as string);

    let saida = 0;
    let figuras: number[] = [];
    for (let i = 0; i < M; ++i) {
        let figura: number = parseInt(entrada.shift()!.trim());

        if (figuras.includes(figura)) {
            continue;
        } else {
            figuras.push(figura);
        }
    }

    saida = N - figuras.length;
    console.log(saida);
});
