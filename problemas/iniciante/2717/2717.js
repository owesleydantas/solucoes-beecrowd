process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const lines = input.split('\n');

    let N = parseInt(lines.shift().trim());
    let [A, B] = lines.shift().trim().split(" ").map(Number);

    if (A + B > N) {
        console.log("Deixa para amanha!");
    } else {
        console.log("Farei hoje!");
    }

});
