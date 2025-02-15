process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    function verificar (A: string, B: string) {
        const tamanho: number = B.length;
        const ultimosDigitos: string = A.slice(-tamanho);

        return ultimosDigitos === B;
    }

    let lines = input.split('\n');
    let N: number = parseInt(lines.shift()!.trim());

    for (let i = 0; i < N; ++i) {
        let [A, B]: string[] = lines.shift()!.trim().split(' ').map(String);

        console.log(verificar(A, B)? "encaixa": "nao encaixa");
    }
});
