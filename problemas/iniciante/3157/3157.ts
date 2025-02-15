process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines: string[] = input.split('\n');
    console.log("Nao se refuta ciencia com opiniao")

});
