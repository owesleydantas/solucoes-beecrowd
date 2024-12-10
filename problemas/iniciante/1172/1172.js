process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const valores = input.trim().split('\n');
    for (let i = 0; i <= 9; i++){
        let X = parseInt(valores[i]);
        if (X <= 0) {
            X = 1;
        }
        console.log(`X[${i}] = ${X}`);
        }
    }

);
