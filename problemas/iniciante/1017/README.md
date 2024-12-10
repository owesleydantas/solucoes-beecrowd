# 1017

Categoria: iniciante
Linguagem: javascript
Link: https://judge.beecrowd.com/pt/problems/view/1017

## Solution

```js
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const [tempo, vecolidade] = input.trim().split('\n').map(Number);
    const resultado = tempo * vecolidade / 12;

    console.log(resultado.toFixed(3));
});


```