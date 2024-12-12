process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    const lines = input.trim().split('\n');

    let O = lines.shift()?.trim();

    let soma: number = 0.0;
    let count: number = 0;

    for (let i = 0; i < 12; ++i) {
        for (let j = 0; j < 12; ++j) {
            let valor: number = parseFloat(lines.shift() as string);

            if ((i > 6) && (11 - i < j && j < i)) {
                soma += valor;
                ++count;
            }
        }
    }

    console.log(`${(O === 'S' ? soma : soma / count).toFixed(1)}`);

});
