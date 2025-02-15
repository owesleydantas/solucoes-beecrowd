process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines: string[] = input.split('\n');
    let [raio, litros]: number[] = lines.shift()!.trim().split(' ').map(Number);
    const PI: number = 3.1415;
    let volume: number = (4 / 3) * (PI * raio ** 3);

    console.log(Math.floor(litros / volume));
});
