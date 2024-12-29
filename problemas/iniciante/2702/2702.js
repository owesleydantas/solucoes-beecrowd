process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.trim().split("\n")
    let [Ca, Ba, Pa] = entrada.shift().trim().split(' ').map(Number);
    let [Cr, Br, Pr] = entrada.shift().trim().split(' ').map(Number);

    let resultado = 0
    resultado += (Cr > Ca) ? (Cr - Ca) : 0;
    resultado += (Br > Ba) ? (Br - Ba) : 0;
    resultado += (Pr > Pa) ? (Pr - Pa) : 0;

    console.log(resultado);
});
