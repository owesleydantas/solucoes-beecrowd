process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.split("\n");

    let C = parseInt(entrada.shift());

    for (let i = 0; i < C; ++i) {
        let [B, E] = entrada.shift().trim().split(' ').map(Number);
        let saida = "";

        for (let j = B; j <= E; ++j) {
            saida += j.toString();
        }
        console.log(`${saida}${saida.split('').reverse().join('')}`);
    }   

});
