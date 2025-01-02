process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.split('\n');

    const N = parseInt(entrada.shift());
    const M = parseInt(entrada.shift());

    let saida = 0;
    let figuras = [];
    for (let i = 0; i < M; ++i) {
        let figura = parseInt(entrada.shift().trim());

        if (figuras.includes(figura)) {
            continue;
        } else {
            figuras.push(figura);
        }
    }

    saida = N - figuras.length;
    console.log(saida);
});
