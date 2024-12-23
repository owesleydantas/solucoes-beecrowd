process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split('\n');
    let [N, M] = entrada.shift().split(' ').map(Number);

    let acoes = [];

    for (let i = 0; i < M; ++i) {
        acoes.push(entrada.shift().trim());
    }

    for (let j = 0; j < acoes.length; ++j) {
        if (acoes[j].trim() === 'fechou') {
            N += 1;
        } else {
            N -= 1;
        }

    }

    console.log(N);

});
