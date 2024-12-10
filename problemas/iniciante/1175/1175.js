process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const N = input.trim().split('\n').map(Number);
    N.reverse();
    for (let i = 0; i <= N.length - 1; ++i) {
        const Y = parseInt(N[i]);
        console.log(`N[${i}] = ${Y}`);
    }

});
