process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines: string[] = input.split('\n');
    const raio: number = parseFloat(lines.shift()!.trim());
    console.log((2 * 3.14 * raio).toFixed(2));
    
});
