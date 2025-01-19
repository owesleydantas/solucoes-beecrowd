process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    let N = parseInt(lines.shift().trim());

    const r = (a, b) => (3 * a) ** 2 + b * b;
    const b = (a, b) => 2 * a * a + (5 * b) ** 2;
    const c = (a, b) => -100 * a + b ** 3;

    for (let i = 0; i < N; ++i) {
        let [X, Y] = lines.shift().trim().split(' ').map(Number);

        if (r(X, Y) > b(X, Y) && r(X, Y) > c(X, Y)) {
            console.log('Rafael ganhou');
        } else if (b(X, Y) > c(X, Y)) {
            console.log('Beto ganhou');
        } else {
            console.log('Carlos ganhou');
        }

    }
    
});
