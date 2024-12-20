process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.split('\n');

    let T = parseInt(entrada.shift());

    --T;

    let saida = [];
    for (let i = 0; i < T; ++i) {
        saida.push("Ho");
    }
    saida.push("Ho!");

    console.log(`${saida.join(" ")}`);
});
