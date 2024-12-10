process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.trim().split('\n').map(Number);
    let pares = [];
    let impares = [];

    for (let i = 0; i < entrada.length; i++) {

        if (entrada[i] % 2 === 0) {
            pares.push(entrada[i]);
        } else {
            impares.push(entrada[i]);
        }

        if (pares.length === 5) {
            for (let a = 0; a < pares.length; ++a) {
            console.log(`par[${a}] = ${pares[a]}`);
            }
            pares = [];
        }

        if (impares.length === 5 ) {
            for (let b = 0; b < impares.length; ++b) {
                console.log(`impar[${b}] = ${impares[b]}`);
            }
            impares = [];
        }
    }

    for (let c = 0; c < impares.length; ++c) {
        console.log(`impar[${c}] = ${impares[c]}`);
    }
    for (let x = 0; x < pares.length; ++x) {
        console.log(`par[${x}] = ${pares[x]}`);
    }

});
