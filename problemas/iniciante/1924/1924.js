process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.split('\n');
    const T = parseInt(entrada.shift().trim());

    for (let i = 0; i < T; ++i) {
        let linha = entrada.shift().split(' ');
    }

    console.log("Ciencia da Computacao");
});
