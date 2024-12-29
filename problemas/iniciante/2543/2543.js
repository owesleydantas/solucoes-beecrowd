process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split("\n");

    let x = 0
    while (x < entrada.length) {
        let [N, L] = entrada[x++].trim().split(" ").map(Number);
        let soma = 0;

        for (let g = 0; g < N; ++g){
            let [i, j] = entrada[x++].trim().split(" ").map(Number);
    
            if (i === L && j === 0) {
                ++soma;
            }
        }
        console.log(soma);
    }

});
