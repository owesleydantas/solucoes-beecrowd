process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";
let lineCount: number = 0;

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines: string[] = input.split('\n');

    while (lines.length) {
        let N: number = parseInt(lines.shift() as string);
        let livros: string[] = [];

        for (let i = 0; i < N; ++i) {
            let codigo: string = lines.shift() as string;
            livros.push(codigo)
        }

        livros.sort()

        for (let j = 0; j < N; ++j) {
            console.log(livros[j]);
        }
    }
});
