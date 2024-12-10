def main():
    a = float(input())
    b = float(input())
    c = float(input())
    d = float(input())
    e = float(input())
    f = float(input())
    entrada = [a, b, c, d, e, f]
    resultado = []

    for valor in entrada:
        if valor >= 0:
            resultado.append(valor)

    print(f"{len(resultado)} valores positivos")
    print(f"{(sum(resultado) / len(resultado)):.1f}")

if __name__ == "__main__":
    main()
