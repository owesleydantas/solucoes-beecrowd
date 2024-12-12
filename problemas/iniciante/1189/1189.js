process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.trim().split('\n');
    let O = lines.shift();

    let soma = 0.0;
    let count = 0;

    for (let i = 0; i < 12; ++i) {
        for (let j = 0; j < 12; ++j) {
            let valor = parseFloat(lines.shift());

            if ((j < 5) && ((i < 6 && j < i) || (i > 5 && j < 11 - i))) {
                soma += valor;
                ++count;
            }
        }
    }

    console.log(`${(O === 'S'? soma : soma / count).toFixed(1)}`)

});
