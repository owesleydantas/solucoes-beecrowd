process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines = input.split('\n');
    let D: number = parseInt(lines.shift()!.trim());

    if (D <= 800) {
        console.log(1);
    } else if (D <= 1400) {
        console.log(2);
    } else {
        console.log(3);
    }

});
