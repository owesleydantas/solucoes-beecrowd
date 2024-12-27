process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const [H, P] = input.trim().split(' ').map(Number);
    console.log(`${(H / P).toFixed(2)}`)
});
