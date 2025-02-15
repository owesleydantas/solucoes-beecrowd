process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    let nota1 = parseInt(lines.shift().trim());
    let media = parseInt(lines.shift().trim());

    console.log(2 * media - nota1);
    
});
