process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const linhas = input.trim().split('\n');
    const N = parseInt(linhas.shift());
    
    for (let i = 1; i <= N; ++i) {
        const X = parseInt(linhas.shift());
        let soma = 0;

        for (let j = 1; j <= Math.floor(X / 2); ++j) {
            if (X % j === 0) {
                soma += j
            }
        }

        if (soma === X) {
            console.log(`${X} eh perfeito`);
        } else {
            console.log(`${X} nao eh perfeito`);
        }
    }

});
