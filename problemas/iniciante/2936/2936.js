process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    let array = [300, 1500, 600, 1000, 150];
    let result = 0;

    for (let porcao of array) {
        let entrada = parseInt(lines.shift().trim());
        result += porcao * entrada;
    }
    console.log(result + 225);
});
