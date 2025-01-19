process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.trim().split('\n');
    let C = parseInt(lines.shift().trim());
    for (let i = 0; i < C; ++i) {
        let pergunta = lines.shift();
        console.log('gzuz');
    }

});
