process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.split('\n');
    const T = parseInt(entrada[0]);

    const Fib = [0, 1];
    for (let i = 2; i <= 60; i++) {
        Fib[i] = Fib[i - 1] + Fib[i - 2];
    }

    for (let i = 1; i <= T; i++) {
        const N = parseInt(entrada[i]);
        console.log(`Fib(${N}) = ${Fib[N]}`);
    }

});
