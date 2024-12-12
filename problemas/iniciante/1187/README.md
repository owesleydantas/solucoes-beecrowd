# 1187

Categoria: iniciante
Linguagem: typescript
Link: https://judge.beecrowd.com/pt/problems/view/1187

## Solution

```ts
process.stdin.setEncoding('utf-8');

let input: string = '';

process.stdin.on('data', (chunk: string) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let entrada: string[] = input.trim().split('\n');
    let O: string = entrada.shift() as string;

    let soma: number = 0.0;
    let count: number = 0;

    for (let i = 0; i < 12; ++i) {
        for (let j = 0; j < 12; ++j) {
            let valor: number = parseFloat(entrada.shift() as string);

            if ((i < 5) && (i < j && j < 11 - i)) {
                soma += valor;
                ++count;
            }
        }
    }

    console.log(`${(O === 'S' ? soma : soma / count).toFixed(1)}`);

});


```