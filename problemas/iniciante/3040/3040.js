process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    let N = parseInt(lines.shift());

    for (let i = 0; i < N; ++i) {
        let [a, d, g] = lines.shift().trim().split(' ').map(Number);

        if ((200 <= a && a <= 300) && d >= 50 && g >= 150) {
            console.log('Sim');
        } else {
            console.log('Nao');
        }
    }
    
});
