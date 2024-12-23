process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    const lines = input.split('\n').map(Number);

    while (lines.length) {
        let N: number = lines.shift()!;
        console.log(N - 1);
    }

});
