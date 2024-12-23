process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split('\n');
    const N = parseInt(entrada.shift());

    for (let i = 0; i < N; ++i) {
        const tentativa = entrada.shift().split(' ');
        if(tentativa[0] === 'Thor') {
            console.log("Y");
        } else {
            console.log("N");
        }
    }
});
