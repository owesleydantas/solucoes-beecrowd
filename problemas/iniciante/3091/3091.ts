process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines: string[] = input.split('\n');
    let A: number = parseInt(lines.shift()!.trim());
    let B: number = parseInt(lines.shift()!.trim());

    console.log(A % B);
    
});
