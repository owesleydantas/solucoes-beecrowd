process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {

    function pegaValores (entrada: string) {
        let A: string = `${entrada[2]}${entrada[3]}`;
        let B: string = `${entrada[5]}${entrada[6]}${entrada[7]}`;
        let C: string = `${entrada[11]}${entrada[12]}`;

        return parseInt(A) + parseInt(B) + parseInt(C);
    }

    let lines = input.split('\n');
    let N: number = parseInt(lines.shift()!.trim());

    for (let i = 0; i < N; i++) {
        let relatorio: string = lines.shift()!.trim();

        console.log(pegaValores(relatorio));
    }
});
