process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.trim().split('\n');

    while (lines.length) {
        
        let L = parseInt(lines.shift().trim());
        let valores = lines.shift().trim().split(' ').map((x) => parseInt(x));
        let maior = Math.max(...valores);

        if (maior < 10) {
            console.log(1);
        } else if (maior < 20) {
            console.log(2);
        } else {
            console.log(3);
        }
    }
    
});
