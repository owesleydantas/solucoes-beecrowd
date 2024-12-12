process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";
let lineCount: number = 0;

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines = input.split('\n');

    while (lines.length) {
        let [M, N] = lines.shift()!.trim().split(' ').map((x) => parseInt(x));

        if (!M && !N) {
            break;
        }

        let soma = (M + N).toString();
        let resposta = soma.split('0').join('');

        console.log(resposta);
    }

});
