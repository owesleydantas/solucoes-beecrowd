process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines: string[] = input.trim().split('\n');
    let [N, X, Y]: number[] = lines[0].split(' ').map(Number);

    console.log((N / (X + Y)).toFixed(2));
    
});
