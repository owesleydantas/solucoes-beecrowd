process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const entrada = input.trim().split('\n');
    const john = entrada[0];
    const medico = entrada[1];

    let aJ = 0;
    let aM = 0;

    for (let i = 0; i < john.length; ++i) {
        if (john.includes("a")) {
            aJ += 1;
        }
    }
    for (let j = 0; j < medico.length; ++j) {
        if (medico.includes("a")) {
            aM += 1;
        }
    }

    if (aJ >= aM) {
        console.log("go");
    } else {
        console.log("no");
    }

});
