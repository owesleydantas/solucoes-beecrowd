process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.trim().split('\n');

    let T = parseInt(entrada.shift());

    for (let i = 0; i < T; ++i) {
        const [R1, R2] = entrada.shift().trim().split(' ').map((x) => parseInt(x));

        console.log(R1 + R2);
    }

});
