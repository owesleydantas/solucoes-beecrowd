process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split('\n');
    
    while (entrada.length) {
        let [X, M]: number[] = entrada.shift()!.trim().split(' ').map(Number);

        if (X === 0 || M === 0) {
            break;
        }
        console.log(M * X);
    }

});
