process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');

    let A = parseInt(lines.shift());
    let B = parseInt(lines.shift());

    console.log(`X = ${A + B}`);
});
