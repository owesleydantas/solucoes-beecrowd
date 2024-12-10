process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let N = parseInt(input.trim());

    let F = [];
    let Fatorial = (n) => {
        if (F[n] === -1) {
            F[n] = Fatorial(n - 1) * n; 
        }
        return F[n];
    }

    F[0] = 1
    for (let i = 1; i <= N; i++) {
        F[i] = - 1;
    }
    console.log(Fatorial(N));

});
