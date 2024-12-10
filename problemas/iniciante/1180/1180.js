process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let X = input.trim().split('\n')[1].split(' ').map(Number);

    const menorValor = Math.min(...X);
    let posicao = X.indexOf(menorValor);

    console.log("Menor valor: " + menorValor);
    console.log("Posicao: " + posicao);
});
