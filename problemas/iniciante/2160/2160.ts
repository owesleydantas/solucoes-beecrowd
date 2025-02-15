process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    let entrada: string = lines.shift()!;

    console.log(entrada.length <= 80 ? "YES" : "NO")
    
});
