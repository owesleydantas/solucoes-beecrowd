process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on("data", (chunk) => {
    input += chunk;
});

process.stdin.on("end", () => {
    let lines = input.split('\n');
    const [H, E, A, O, W, X] = lines.shift().trim().split(' ').map(Number);

    const ladoBem = H + E + A + X;
    const ladoMal = O + W;
    
    console.log((ladoBem > ladoMal && ladoMal < ladoBem) ? "Middle-earth is safe." : "Sauron has returned.");

});
