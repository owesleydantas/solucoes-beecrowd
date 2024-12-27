process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const I = parseInt(input.trim().split('\n'));
    let resultado = "Feliz nat";

    for (let i = 0; i < I; ++i) {
        resultado += 'a';
    }
    resultado += 'l!'

    console.log(resultado);
});
