process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.split('\n');
    let N = parseInt(entrada.shift());

    let valores = entrada.shift().trim().split(' ').map((x) => parseInt(x));

    for (let i = 2; i < 6; ++i) {
        console.log(`${valores.reduce((v1, v2) => (v2 % i === 0) ? v1 + 1 : v1, 0)} Multiplo(s) de ${i}`);
    }
});
