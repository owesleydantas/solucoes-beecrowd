process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    let T = parseInt(lines.shift()!.trim());

    for (let i = 0; i < T; ++i){
        let [N, K]: number[] = lines.shift()!.trim().split(' ').map(Number);
        let garrafas: number = N;
        let vazias: number = N;

        while (vazias >= K) {
            let novas: number = Math.floor(garrafas / K);
            garrafas += novas;
            vazias = vazias % K + novas;
            break;
        }
        console.log(vazias);
    }
    
});
