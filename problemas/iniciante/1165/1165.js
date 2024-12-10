process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let linhas = input.trim().split('\n');
    const N = parseInt(linhas.shift());

    for (let i = 1; i <= N; ++i) {
        const X = parseInt(linhas.shift());

        if (X <= 1) {
            console.log(`${X} nao eh primo`);
            continue;
        }

        let isPrimo = true;

        for (let j = 2; j <= Math.sqrt(X); j++) {
            if (X % j === 0) {
                isPrimo = false;
                break;
            }
        }

        if (isPrimo) {
            console.log(`${X} eh primo`)
        } else {
            console.log(`${X} nao eh primo`)
        }
    }

});
