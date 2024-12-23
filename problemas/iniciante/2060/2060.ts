process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines = input.split('\n');
    let N: number = parseInt(lines.shift()!);

    let valores: number[] = lines.shift()!.trim().split(' ').map((x) => parseInt(x));

    for (let i = 2; i < 6; ++i) {
        console.log(`${valores.reduce((v1: number, v2: number) => (v2 % i === 0) ? v1 + 1 : v1, 0)} Multiplo(s) de ${i}`);
    }
});
