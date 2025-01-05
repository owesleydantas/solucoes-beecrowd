process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.split("\n");

    while (entrada.length) {
        let [A, B, C] = entrada.shift().trim().split(' ').map(x => parseInt(x));
    
        if (A === 0) {
            break;
        }
    
        console.log(Math.floor(Math.sqrt(A * B * 100 / C)).toFixed(0));
    }

});
