process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    let raio: number = parseFloat(lines.shift()!);

    let PI: number = 3.14159;
    console.log(`A=${(PI * (raio ** 2)).toFixed(4)}`);
});
