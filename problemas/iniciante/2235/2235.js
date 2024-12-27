process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const [a, b, c] = input.trim().split(' ').map(Number);

    if (a === b || a === c || b === c) {
        console.log("S");
    } else if (a + b === c || a + c === b || b + c === a) {
        console.log("S");
    } else {
        console.log("N");
    }

});
