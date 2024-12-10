def main():
    a = float(input())
    b = float(input())
    c = float(input())
    d = float(input())
    e = float(input())
    entrada = [a, b, c, d, e]
    resultado = []
    for valor in entrada:
        if valor % 2 == 0:
            resultado.append(valor)

    print(f"{len(resultado)} valores pares")

if __name__ == "__main__":
    main()
