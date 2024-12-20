process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";
let lineCount: number = 0;

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines = input.split('\n');

    while (lines.length - 1) {
        const N: number = parseInt(lines.shift() as string);

        if (N === 0) {
            console.log("vai ter copa!");
        } else {
            console.log("vai ter duas!");
        }
         
    }

});
