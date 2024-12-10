def main():
    a = int(input())
    b = int(input())
    c = int(input())
    d = int(input())
    e = int(input())
    entrada = [a, b, c, d, e]
    positivos = 0
    negativos = 0
    pares = 0
    impares = 0
    for valor in entrada:
        if valor > 0:
            positivos += 1
        if valor < 0:
            negativos += 1

        if valor % 2 == 0:
            pares += 1
        else:
            impares += 1

    print(f"{pares} valor(es) par(es)")
    print(f"{impares} valor(es) impar(es)")
    print(f"{positivos} valor(es) positivo(s)")
    print(f"{negativos} valor(es) negativo(s)")

if __name__ == "__main__":
    main()
