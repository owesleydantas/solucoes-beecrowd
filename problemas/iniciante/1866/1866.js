process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.trim().split('\n');
    const N = entrada.shift()

    for (let i = 0; i < N; ++i) {
        const numero = parseInt(entrada.shift())

        if (numero % 2 === 0) {
            console.log("0")
        } else {
            console.log("1")
        }
    }

});
