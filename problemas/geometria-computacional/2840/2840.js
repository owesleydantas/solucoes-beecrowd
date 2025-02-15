process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    let [raio, litros] = lines.shift().trim().split(' ').map(Number);
    const PI = 3.1415;
    let volume = (4 / 3) * (PI * raio ** 3);

    console.log(Math.floor(litros / volume));
});
