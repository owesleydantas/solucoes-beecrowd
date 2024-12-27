process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const N = parseInt(input.trim().split('\n'));

    if (N > 85) {
        console.log("A");
    }
    else if (N > 60) {
        console.log("B");
    }
    else if (N > 35) {
        console.log("C");
    }
    else if (N > 0) {
        console.log("D")
    } else {
        console.log("E");
    }
});
