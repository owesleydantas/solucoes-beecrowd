process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines = input.split('\n');

    let N: number = parseInt(lines.shift() as string);

    --N;
    let saida: string[] = [];
    for (let i = 0; i < N; ++i) {
        saida.push("Ho");
    }
    saida.push("Ho!");

    console.log(`${saida.join(" ")}`);
});
