process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines = input.split('\n');
    const n: number = parseInt(lines.shift() as string);
    const m: number = parseInt(lines.shift() as string);

    console.log(`${n - m}`);

});
