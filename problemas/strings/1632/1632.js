process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.trim().split('\n');
    const T = parseInt(entrada.shift(), 10);
    const especiais = ['a', 'e', 'i', 'o', 's', 'A', 'E', 'I', 'O', 'S'];

    for (let i = 0; i < T; ++i) {
        let count = 1;
        const senha = entrada.shift().trim();

        for (const char of senha) {
            if (especiais.includes(char)) {
                count *= 3
            } else {
                count *= 2
            }
        }

        console.log(count);
    }
});
