process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split('\n');
    let L = parseInt(entrada.shift().trim());
    let C = parseInt(entrada.shift().trim());

    console.log((L * C + (L - 1) * (C - 1)));
    console.log(((L - 1) * 2) + ((C - 1) * 2));
});
