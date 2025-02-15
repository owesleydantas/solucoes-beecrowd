process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines: string[] = input.split('\n');
    const [N, X]: number[] = lines.shift()!.split(' ').map(Number);
    console.log((X / (N + 2)).toFixed(2));
});
