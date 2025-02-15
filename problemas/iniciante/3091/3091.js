process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    let A = parseInt(lines.shift().trim());
    let B = parseInt(lines.shift().trim());

    console.log(parseInt(A % B));
    
});
