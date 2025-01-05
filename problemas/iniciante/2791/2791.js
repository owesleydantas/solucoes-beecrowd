process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let [C1, C2, C3, C4] = input.trim().split(' ').map(x => parseInt(x));
    let lista = [C1, C2, C3, C4]

    lista.forEach((valor, indice) => {
        if (valor === 1) {
            console.log(indice + 1);
        }
    })
});
