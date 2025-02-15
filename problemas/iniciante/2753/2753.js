process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    for (let valor = 97; valor < 123; ++valor) {
        console.log(`${valor} e ${String.fromCharCode(valor)}`);
    }
    
});
