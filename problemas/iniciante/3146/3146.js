process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    const raio = parseFloat(lines.shift().trim());
    console.log((2 * 3.14 * raio).toFixed(2));
    
});
