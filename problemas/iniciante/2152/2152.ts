process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.split('\n');

    let N = parseInt(entrada.shift()!);
    for (let i = 0; i < N; ++i) {
        let [hora, minuto, acao] = entrada.shift()!.trim().split(' ');
        console.log(`${hora.padStart(2, '0')}:${minuto.padStart(2, '0')} - A porta ${acao === "1" ? "abriu!" : "fechou!"}`);
    }
});