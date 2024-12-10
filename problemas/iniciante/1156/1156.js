let S = 0.0;
let numerador = 1;
let denominador = 1;

for (let i = 1; i <= 20; ++i) {
    S +=  numerador / denominador;
    numerador += 2;
    denominador *= 2;
}

console.log(S.toFixed(2))