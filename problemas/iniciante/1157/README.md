# 1157

Categoria: iniciante
Linguagem: javascript
Link: https://judge.beecrowd.com/pt/problems/view/1157

## Solution

```js
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada = parseInt(input.trim());
    for (let i = 1; i <= entrada; i++) {
        if (entrada % i === 0) {
            console.log(i);
        }
    }
});

```
