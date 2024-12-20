process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split('\n');
    while (entrada.length) {
        const N = parseInt(entrada.shift().trim());

        for (let i = 0; i < N; ++i) {
            let linha = '';

            for (let j = 0; j < N; ++j) {

                if (i === N - 1 - j) {
                    linha += '2';
                } else if (i === j) {
                    linha += '1';
                } else {
                    linha += '3';
                }
            }

            console.log(linha);
        }
    }

});
