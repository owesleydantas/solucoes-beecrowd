# 1173

Categoria: iniciante
Linguagem: javascript
Link: https://judge.beecrowd.com/pt/problems/view/1173

## Solution

```js
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let V = parseInt(input.trim());

    for (let i = 0; i <= 9; ++i) {
        console.log(`N[${i}] = ${V}`)
        V += V;
    }
});


```