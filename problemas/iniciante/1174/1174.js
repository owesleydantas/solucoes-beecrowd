process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const Vetor = input.trim().split('\n').map(Number);
    for (let i = 0; i <= Vetor.length; ++i) {
        const valor = parseFloat(Vetor[i]);
        if (valor <= 10) {
            console.log(`A[${i}] = ${valor.toFixed(1)}`);
        }
    }
});
