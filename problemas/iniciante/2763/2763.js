process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.split("\n");

    let CPF = entrada.shift().trim().split(/[\\.-]/);

    for (let valor of CPF) {
        console.log(valor);
    }
});
