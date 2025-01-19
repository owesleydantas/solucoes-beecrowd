process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines: string[] = input.trim().split('\n');
    let C: number = parseInt(lines.shift()!.trim());

    for (let i = 0; i < C; ++i) {
        let N: number = parseInt(lines.shift()!.trim());
        
        if (N > 8000) {
            console.log("Mais de 8000!");
        } else {
            console.log("Inseto!");
        }
    }
    
});
