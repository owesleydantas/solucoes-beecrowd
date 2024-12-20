process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.trim().split('\n');
    
    while (entrada.length) {
        const N = parseInt(entrada.shift());

        if (N === 0) {
            console.log("vai ter copa!");
        } else {
            console.log("vai ter duas!");
        }
    }

});
