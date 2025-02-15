process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines = input.split('\n');
    const [H, E, A, O, W, X]: number[] = lines.shift()!.trim().split(' ').map(Number);

    const ladoBem: number = H + E + A + X;
    const ladoMal: number = O + W;
    
    console.log((ladoBem > ladoMal && ladoMal < ladoBem) ? "Middle-earth is safe." : "Sauron has returned.")

});
