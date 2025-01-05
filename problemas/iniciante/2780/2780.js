process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.trim().split('\n');
    const D = parseInt(lines.shift());

    if (D <= 800) {
        console.log("1");
    } else if (D <= 1400) {
        console.log("2");
    } else {
        console.log("3");
    }
});
