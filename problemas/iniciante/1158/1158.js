process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const casos = input.trim().split('\n');  
    const N = parseInt(casos[0].trim());    

    for (let i = 1; i <= N; i++) {
        let [X, Y] = casos[i].split(' ').map(Number);

        let count = 0;
        let soma = 0;

        if (X % 2 === 0) {
            X++;
        }

        while (count < Y) {
            soma += X;
            X += 2; 
            count++;
        }
        console.log(soma);
    }
});
