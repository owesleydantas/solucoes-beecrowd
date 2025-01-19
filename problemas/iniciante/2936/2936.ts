process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines: string[] = input.split('\n');
    let array: number[] = [300, 1500, 600, 1000, 150];
    let result = 0;

    for (let porcao of array) {
        let entrada: number = parseInt(lines.shift()!.trim());
        result += porcao * entrada;
    }
    console.log(result + 225);
});
