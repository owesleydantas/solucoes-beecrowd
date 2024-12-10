process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let [X, Y] = input.trim().split('\n');
    X = parseInt(X);
    Y = parseFloat(Y);

    console.log(`${(X / Y).toFixed(3)} km/l`);
});
