process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    function ehDificil (palavra) {
        const vogais = ['a', 'e', 'i', 'o', 'u'];
        let consoantes = 0;

        for (let letra of palavra) {
            if (!vogais.includes(letra.toLowerCase())) {
                consoantes += 1;
            } else {
                consoantes = 0;
            }

            if (consoantes >= 3) {
                return true;
            }
        }
        return false;
    }

    let lines = input.split('\n');
    let N = parseInt(lines.shift());

    for (let i = 0; i < N; ++i) {
        let sobrenome = lines.shift().trim();
        console.log(ehDificil(sobrenome) ? `${sobrenome} nao eh facil`: `${sobrenome} eh facil`);
    }

});
