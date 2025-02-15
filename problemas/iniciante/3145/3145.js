process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    const [N, X] = lines.shift().split(' ').map(Number);

    console.log((X / (N + 2)).toFixed(2));
});
