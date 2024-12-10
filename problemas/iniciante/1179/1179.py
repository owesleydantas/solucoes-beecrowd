def main():
    valores = []
    for _ in range(15):
        a = int(input())
        valores.append(a)
    
    pares = []
    impares = []
    for i in range(len(valores)):
        if valores[i] % 2 == 0:
            pares.append(valores[i])
        else:
            impares.append(valores[i])

        if len(pares) == 5:
            for valor in range(len(pares)):
                print(f"par[{valor}] = {pares[valor]}")
            pares = []

        if len(impares) == 5:
            for numero in range(len(impares)):
                print(f"impar[{numero}] = {impares[numero]}")
            impares = []

    for e in range(len(impares)):
        print(f"impar[{e}] = {impares[e]}")
    for r in range(len(pares)):
        print(f"par[{r}] = {pares[r]}")

if __name__ == "__main__":
    main()
