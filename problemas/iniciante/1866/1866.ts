process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines: string[] = input.trim().split('\n');

    const N: number = parseInt(lines.shift() as string);
    for (let i = 0; i < N; ++i) {
        const numero: number = parseInt(lines.shift() as string);

        if (numero % 2 === 0) {
            console.log("0")

        } else {
            console.log("1");
        }
    }

});
