# 1154

Categoria: iniciante
Linguagem: javascript
Link: https://judge.beecrowd.com/pt/problems/view/1154

## Solution

```js
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let numeros = [];

    let entradas = input.trim().split('\n');
    for (let i = 0; i < entradas.length; i++) {
        let entrada = parseInt(entradas[i].trim());

        if (entrada < 0) {
            break;
        } else {
            numeros.push(entrada);
        }
    }
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    let media = numeros.length > 0 ? soma / numeros.length : 0;
    console.log(`${media.toFixed(2)}`)
});

```
