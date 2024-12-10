process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let linhas = input.trim().split('\n');
    let i = 0;

    while (i < linhas.length) {
        let X = parseInt(linhas[i].trim());

        if (X === 0) {
            break;
        }

        if (X % 2 !== 0) {
            X += 1;
        }

        let soma = 0;
        for (let j = 0; j < 5; j++) {
            soma += X;
            X += 2;
        }

        console.log(soma);
        i++;
    }
});
