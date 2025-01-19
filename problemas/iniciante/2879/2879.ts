process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines: string[] = input.split('\n');
    let N: number = parseInt(lines.shift()!.trim());
    let vitorias =  0;

    for (let i = 0; i < N; ++i) {
        let porta: number = parseInt(lines.shift()!.trim());

        if (porta !== 1) {
            vitorias += 1;
        }    
    }
    console.log(vitorias);

});
