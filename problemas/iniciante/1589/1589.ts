process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";
let lineCount: number = 0;

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines = input.split('\n');

    let T: number = parseInt(lines.shift() as string);
    for (let i = 0; i < T; ++i) {
        let [R1, R2]: number[] = lines.shift()?.trim().split(' ').map(Number) || [];

        console.log(R1 + R2);
    }

});
