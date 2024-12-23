process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split('\n');
    
    while (entrada.length) {
        let V = parseFloat(entrada.shift());
        let D = parseFloat(entrada.shift());
        
        D /= 2;

        let area = 3.14 * D * D;
        let altura = V / area;

        console.log(`ALTURA = ${altura.toFixed(2)}`);
        console.log(`AREA = ${area.toFixed(2)}`);
    }
});
