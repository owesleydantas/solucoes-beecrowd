process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.split('\n');

    while (entrada.length) {
        let N = parseInt(entrada.shift().trim());

        if (N === 0) {
            break;
        }

        let saida = '';

        for (let i = 0; i < N; ++i) {
            saida += (1).toString().padStart(3);

            for (let j = 1; j < N; ++j) {
                saida += (Math.min(Math.min(i, N - i - 1), Math.min(j, N - j - 1)) + 1).toString().padStart(4);
            }
            saida += '\n';
        }
        console.log(saida);
    }

});