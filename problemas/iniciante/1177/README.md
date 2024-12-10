# 1177

Categoria: iniciante
Linguagem: javascript
Link: https://judge.beecrowd.com/pt/problems/view/1177

## Solution

```js
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const T = parseInt(input.trim());

    let x = 0;
    for (let i = 0; i <= 999; i++) {

        console.log(`N[${i}] = ${x}`)
        x += 1;
        if (x >= T) {
            x = 0
        }
    }

});


```