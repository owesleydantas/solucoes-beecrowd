process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const [a, b] = input.trim().split(' ').map(Number);

        if (a === b) {
            console.log(a);
        } else {
            console.log(Math.max(a, b));
        }
});
