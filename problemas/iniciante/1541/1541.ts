process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines = input.split('\n');

    while (lines.length) {
        let [A, B, C]: number[] = lines.shift()!.trim().split(' ').map(x => parseInt(x));

        if (A === 0) {
            break;
        }

        console.log(Math.floor(Math.sqrt(A * B * 100 / C)).toFixed(0));
    }

});
