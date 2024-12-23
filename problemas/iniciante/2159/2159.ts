process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const n: number = parseInt(input.trim());
    const p: number = n / Math.log(n);
    const m: number = 1.25506 * p;

    console.log(`${p.toFixed(1)} ${m.toFixed(1)}`);
});
