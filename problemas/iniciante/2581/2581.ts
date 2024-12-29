process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines: string[] = input.split('\n');
    let N: number = parseInt(lines.shift() as string);

    for (let i = 0; i < N; ++i) {
        let pergunta: string = lines.shift()!;
        console.log(`I am Toorg!`);
    }
});
