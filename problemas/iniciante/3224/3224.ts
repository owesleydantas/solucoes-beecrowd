process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";
let lineCount: number = 0;

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    const lines: string[] = input.split('\n');
    const John: string = lines[0];
    const Medico: string = lines[1];

    let AJ: number = 0;
    let AM: number = 0;

    for (let i = 0; i < John.length; ++i) {
        if (John.includes("a")) {
            AJ += 1;
        }
    }
    for (let j = 0; j < Medico.length; ++j) {
        if (Medico.includes("a")) {
            AM += 1;
        }
    }

    if (AJ >= AM) {
        console.log("go");

    } else {
        console.log("no");
    }
        

});
