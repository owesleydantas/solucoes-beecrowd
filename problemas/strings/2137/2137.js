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
        let N = parseInt(entrada.shift());
        let listaCodigos = [];

        for (let i = 0; i < N; ++i) {
            let codigo = entrada.shift();
            listaCodigos.push(codigo);
        }

        listaCodigos.sort();

        for (let j = 0; j < N; ++j) {
            console.log(listaCodigos[j]);
        }
        
    }

});
