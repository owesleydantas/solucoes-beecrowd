process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');

    let L = parseInt(lines.shift()!.trim());
    let C = parseInt(lines.shift()!.trim());

    let tabuleiro: number[] = [];

    for (let i = 1; i <= L; ++i) {
        for (let j = 1; j <= C; ++j) {
            if ((i - j) % 2 === 0) {
                tabuleiro.push(1);
            } else {
                tabuleiro.push(0);
            }
        }
    }

    console.log(tabuleiro[tabuleiro.length - 1]);
});
