process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.trim().split('\n');
    const n = parseInt(entrada.shift());
    const m = parseInt(entrada.shift());

    console.log(`${n - m}`)
});
