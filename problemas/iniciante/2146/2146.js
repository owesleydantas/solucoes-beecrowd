process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.trim().split('\n').map(Number);

    while (entrada.length) {
        let N = entrada.shift();
        console.log(N - 1);
    }
});
