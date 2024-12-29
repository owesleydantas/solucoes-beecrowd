process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = input.split('\n');

    let [pessoas, jipes] = [0, 0];
    let [comando, visitantes] = entrada.shift().trim().split(' ');

    while (comando !== "ABEND") {
        if (comando === "SALIDA") {
            pessoas += parseInt(visitantes);
            ++jipes;
        } else {
            pessoas -= parseInt(visitantes);
            --jipes;
        }

        [comando, visitantes] = entrada.shift().trim().split(' ');
    }   

    console.log(pessoas);
    console.log(jipes);
});
