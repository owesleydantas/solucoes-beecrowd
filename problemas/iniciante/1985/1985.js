process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";
let lineCount = 0;

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const estoque = {1001: 1.50, 1002: 2.50, 1003: 3.50, 1004: 4.50, 1005: 5.50};

    let entrada = input.trim().split('\n');
    let N = parseInt(entrada.shift());
    let compras = [];
    let pagar = 0;
    for (let i = 0; i < N; ++i) {
        const [codigo, quantidade] = entrada.shift().trim().split(' ').map(Number);
        compras.push([codigo, quantidade]);
    }

    compras.forEach(pedido => {
        const [codigo, quantidade] = pedido;
        if  (estoque.hasOwnProperty(codigo)) {
            pagar += quantidade * estoque[codigo];
        }
    });

    console.log(pagar.toFixed(2));
});
