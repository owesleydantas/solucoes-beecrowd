# 1151

Categoria: iniciante
Linguagem: javascript
Link: https://judge.beecrowd.com/pt/problems/view/1151

## Solution

```js
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const N = parseInt(input.trim());
    if (N <= 0 || N >= 46) {
        console.log("Entrada inválida. Digite um número entre 1 e 45.");
        return;
    }

    let a = 0, b = 1;
    const result = [a];

    for (let i = 1; i < N; i++) {
        result.push(b);
        [a, b] = [b, a + b];
    }

    console.log(result.join(' '));
});

```
