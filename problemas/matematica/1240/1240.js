process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    function verificar (A, B) {
        const tamanho = B.length;
        const ultimosDigitos = A.slice(-tamanho);

        return ultimosDigitos === B;
    }

    let lines = input.split('\n');
    let N = parseInt(lines.shift().trim());

    for (let i = 0; i < N; ++i) {
        let [A, B] = lines.shift().trim().split(' ').map(String);

        console.log(verificar(A, B)? "encaixa": "nao encaixa");
    }
});
