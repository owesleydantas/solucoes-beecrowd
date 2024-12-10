# 1160

Categoria: iniciante
Linguagem: javascript
Link: https://judge.beecrowd.com/pt/problems/view/1160

## Solution

```js
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let linhas = input.trim().split('\n');
    let T = parseInt(linhas.shift());

    for (let i = 0; i < T; ++i) {
        let [PA, PB, G1, G2] = linhas.shift().trim().split(' ');
        [PA, PB] = [parseInt(PA), parseInt(PB)];
        [G1, G2] = [parseFloat(G1) / 100, parseFloat(G2) / 100];

        let anos;
        for (anos = 1; PA <= PB && anos < 101; ++anos) {
            PA += Math.floor(PA * G1);
            PB += Math.floor(PB * G2);
        }

        if (PA <= PB) {
            console.log(`Mais de 1 seculo.`)
        } else {
            console.log(`${anos - 1} anos.`)
        }
    }

});

```
