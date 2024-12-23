process.stdin.resume();
process.stdin.setEncoding('utf8');

let input: string = "";

process.stdin.on("data", (chunk: string) => {
    input += chunk;
});

process.stdin.on("end", () => {
    const N: number = parseInt(input.trim());

    if (N === 1) {
        console.log("Top 1");
    } else if ( N <= 3) {
        console.log("Top 3");
    } else if (N <= 5) {
        console.log("Top 5");
    } else if (N <= 10)  {
        console.log("Top 10");
    } else if (N <= 25) {
        console.log("Top 25");
    } else if (N <= 50) {
        console.log("Top 50");
    } else {
        console.log("Top 100");
    }

});
